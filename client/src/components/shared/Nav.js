import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {

    //home page showing NavLink 
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <br></br>
            <NavLink to="/items">ITEMS</NavLink>
            <br></br>
            <NavLink to="/create-item">CREATE ITEM</NavLink>
        </nav>
    );
};

export default Nav;

//then go to Footer.js