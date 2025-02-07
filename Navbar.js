import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import logoidea from "../Assets/logoidea2.PNG";
import { useTheme } from "../utils/ThemeContext";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import './Navbar.css';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const location = useLocation();
    const isHome = location.pathname === "/";

    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <nav className={`navbar ${isDarkMode ? "dark-mode" : ""}`}>
            <div className="navbar-container">
                <button className="menu-toggle" onClick={handleToggle}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

                <div className="logo">
                    <NavLink to="/">
                        <img src={logoidea} alt="MilkM8 Logo" className="logo-image" />
                    </NavLink>
                </div>

                {!isHome && <BackButton />}

                <button className="theme-toggle" onClick={toggleTheme}>
                    {isDarkMode ? <FaSun /> : <FaMoon />}
                </button>
            </div>

            <ul className={`menu ${isOpen ? "open" : ""}`} data-isopen={isOpen}>
                {[
                    { path: "/", label: "Home" },
                    { path: "/about-page", label: "About" },
                    { path: "/log-entry", label: "Log Entry" },
                    { path: "/stats", label: "Stats" },
                    { path: "/resources", label: "Resources" },
                    { path: "/calculators", label: "Calculators" },
                    { path: "/profile", label: "Profile" },
                    { path: "/feed-tracker", label: "Feed Tracker" },
                    { path: "/milestone-tracker", label: "Milestone Tracker" },
                    { path: "/settings-page", label: "Settings" },
                    { path: "/help-center", label: "Help Center" },
                    { path: "/feedback-form", label: "Feedback" },
                    { path: "/reminders", label: "Reminders" },
                ].map(({ path, label }) => (
                    <li key={path}>
                        <NavLink
                            to={path}
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Navbar;