import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {

    //home page showing NavLink 
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <br/>
            <NavLink to="/plans">PLANS</NavLink>
            <br/>
            <NavLink to="/create-plan">CREATE PLAN</NavLink>
        </nav>
    );
};

export default Nav;

//then go to Footer.js