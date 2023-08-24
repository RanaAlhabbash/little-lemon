import React from "react";
import Logo from "../Images/Logo.svg"

function Footer(){
    return(
        <div className="footer">
            <div className="one">
                <img src={Logo} alt="log" className="log" />
            </div>
            <div className="two">
                <h5>Navigation</h5>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="three">
                <h5>Contact</h5>
                <ul>
                    <li>Phone Number</li>
                    <li>Email</li>
                    <li>Adress</li>
                </ul>
            </div>
            <div className="four">
                <h5>Social Media</h5>
                <ul>
                    <li>Instagram</li>
                    <li>Linked In</li>
                    <li>Pinterest</li>
                </ul>
            </div>
        </div>
    )
};

export default Footer;