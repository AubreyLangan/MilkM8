import React from "react";
import { NavLink  } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="logo">MilkM8</div>
        <ul className="menu">
            <li>
                <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/log-entry" className={({ isActive }) => (isActive ? "active" : "")}>
                    Log Entry
                </NavLink>
            </li>
            <li>
                <NavLink to="/stats" className={({ isActive }) => (isActive ? "active" : "")}>
                    Stats
                </NavLink>
            </li>
            <li>
                <NavLink to="/tips" className={({ isActive }) => (isActive ? "active" : "")}>
                    Tips
                </NavLink>
            </li>
        </ul>
      </nav>
    );
};

export default Navbar;