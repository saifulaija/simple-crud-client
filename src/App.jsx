
import './App.css'
import Header from './components/Header';

function App() {

  const handleAddUser =(event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};
    console.log(user); 

    fetch('http://localhost:5000/users', {
      method:'POST',
      headers:{
        'content-type': 'application/json'
      },
      body:JSON.stringify(user)
      
    })

    .then(res=>res.json())
    .then(data=>{
      console.log(data);

      if(data.insertedId){
        alert('user added successfully')
        form.reset()
      }
    })
  }
  

  return (
    <>
      <Header></Header>
      <h1>Simple CRUD</h1>
      <div>
        <form onSubmit={handleAddUser}>
          <input type="text" name='name' placeholder='name' />
          <br />
          <input type="email" name='email' placeholder='email' />
          <br />
          <input type="submit" value='Add Users' />
        </form>
      </div>
      
    </>
  )
}

export default App
