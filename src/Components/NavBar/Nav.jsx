import React from "react";

import './Nav.css'

const NavBar = ()=>{

    return(
    <>
     <nav className="NavContainer">
        <ul className="ul_nav">
            <li className="li_nav">Icon</li>
            <li className="li_nav">Home</li>
            <li className="li_nav">About Me</li>
        </ul>
     </nav>
    </>
    )
}

export default NavBar