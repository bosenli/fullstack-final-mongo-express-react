import React from 'react';
import { NavLink } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import 'bootstrap/dist/css/bootstrap.min.css'

const Nav = () => {

    //home page showing NavLink 
    return (
        <nav>
            <Breadcrumb>
            <Breadcrumb.Item><NavLink to="/">HOME</NavLink> </Breadcrumb.Item>
            <Breadcrumb.Item><NavLink to="/plans">PLANS</NavLink> </Breadcrumb.Item>
            <Breadcrumb.Item><NavLink to="/create-plan">CREATE PLAN</NavLink> </Breadcrumb.Item>
            </Breadcrumb>
        </nav>
    );
};

export default Nav;

//then go to Footer.js