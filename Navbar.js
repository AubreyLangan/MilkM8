import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import logoidea from "../Assets/logoidea2.PNG";
import './Navbar.css'

const Navbar = ({ toggleTheme, theme }) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
      <nav className="navbar">

        <div className="navbar-logo">
            <NavLink to="/">
                <img src={logoidea} alt="MilkM8 Logo" className="logo-image" />
            </NavLink>
        </div>

        <button onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
        {!isHome && <BackButton />}
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
                <NavLink to="/resources" className={({ isActive }) => (isActive ? "active" : "")}>
                    Resources
                </NavLink>
            </li>
            <li>
                <NavLink to="calculator" className={({ isActive }) => (isActive ? "active" : "")}>
                    Calculator
                </NavLink>
            </li>
        </ul>
      </nav>
    );
};

export default Navbar;