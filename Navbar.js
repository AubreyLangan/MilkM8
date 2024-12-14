import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import logoidea from "../Assets/logoidea2.PNG";
import './Navbar.css'

const Navbar = ({ toggleTheme, theme }) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevState) => {
            console.log("Toggling Navbar:", !prevState);
            return !prevState;
        });
    };

    return (
      <nav className="navbar">
        <div className="navbar-container">
            <button className="menu-toggle" onClick={handleToggle}>
                {isOpen ? "Close" : "Menu"}
            </button>

            <div className="navbar-logo">
                <NavLink to="/">
                    <img src={logoidea} alt="MilkM8 Logo" className="logo-image" />
                </NavLink>
            </div>

            {!isHome && <BackButton />}
        </div>
        <ul className={`menu ${isOpen ? "open" : ""}`} data-isopen={isOpen}>
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
                <NavLink to="/calculators" className={({ isActive }) => (isActive ? "active" : "")}>
                    Calculator
                </NavLink>
            </li>
            <li>
                <NavLink to="/user-profile" className={({ isActive }) => (isActive ? "active" : "")}>
                    Profile
                </NavLink>
            </li>
        </ul>
      </nav>
    );
};

export default Navbar;