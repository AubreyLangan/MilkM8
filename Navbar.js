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
    const [statsDropdown, setStatsDropdown] = useState(false);
    const [trackersDropdown, setTrackersDropdown] = useState(false);

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
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-page" className={({ isActive }) => (isActive ? "active" : "")}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/log-entry" className={({ isActive }) => (isActive ? "active" : "")}>
                        Log Entry
                    </NavLink>
                </li>
                <li
                    className="dropdown"
                    onMouseEnter={() => setStatsDropdown(true)}
                    onMouseLeave={() => setStatsDropdown(false)}
                >
                    <span className="dropdown-title">Stats ▾</span>
                    {statsDropdown && (
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/stats">Overview</NavLink>
                            </li>
                            <li>
                                <NavLink to="/progress-trends">Progress & Trends</NavLink>
                            </li>
                            <li>
                                <NavLink to="/feeding-pattern-generator">Feeding Patterns</NavLink>
                            </li>
                        </ul>
                    )}
                </li>

                <li
                    className="dropdown"
                    onMouseEnter={() => setTrackersDropdown(true)}
                    onMouseLeave={() => setTrackersDropdown(false)}
                >
                    <span className="dropdown-title">Trackers ▾</span>
                    {trackersDropdown && (
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink to="/feed-tracker">Feed Tracker</NavLink>
                            </li>
                            <li>
                                <NavLink to="/milestone-tracker">Milestone Tracker</NavLink>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <NavLink to="/resources">Resources</NavLink>
                </li>
                <li>
                    <NavLink to="/calculators">Calculators</NavLink>
                </li>
                <li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/settings-page">Settings</NavLink>
                </li>
                <li>
                    <NavLink to="/partner-management">Partner Management</NavLink>
                </li>
                <li>
                    <NavLink to="/help-center">Help Center</NavLink>
                </li>
                <li>
                    <NavLink to="/feedback-form">Feedback</NavLink>
                </li>
                <li>
                    <NavLink to="/reminders">Reminders</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;