import Nav from './Nav'
import Footer from './Footer';

import React from 'react';

const Layout = (props) => {
    return (
        <div>
            <h1>Plans App</h1>
                <Nav/>
            {/* children of the components that is inside Home header h4 */}
                {props.children} 

            <Footer/>
        </div>
    );
};

export default Layout;

//then goto Nav.js file to code