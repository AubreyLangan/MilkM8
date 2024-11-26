import React from "react";
import { Link  } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-title">MilkM8</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/log-entry">Log Entry</Link>
                </li>
                <li>
                    <Link to="/stats">Stats</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;