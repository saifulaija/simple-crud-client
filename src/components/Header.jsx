/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
        return (
                <nav style={{display:'flex'}}>
                     <h3>MANAGEMENT</h3>
                     <Link to='/users'>Users</Link>    
                </nav>
        );
};

export default Header;