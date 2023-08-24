import React from "react";
import Logo from "../Images/Logo.svg"
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="log" className="log" />
            </div>
            <div className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
            </ul>
            </div>
        </div>
    )
};

export default Header;