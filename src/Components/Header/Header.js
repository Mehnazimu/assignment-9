import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (

        <nav className='nav'>
            <div>
                <h1 className='headline'>Quiz-track</h1>
            </div>

            <div className='header'>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>


        </nav>
    );
};

export default Header;