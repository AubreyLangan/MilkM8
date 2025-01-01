import React, { useState } from "react";
import { useTheme } from "../utils/ThemeContext";

const SettingsPage = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [notificationsEnabled, setNotificationsEnabled] = useState(true);

    const handleSaveProfile = (e) => {
        e.preventDefault();
        alert("Profile settings saved!");
    };

    const handleExportData = () => {
        alert("Your data has been exported.");
    };

    const handleDeleteAccount = () => {
        if (window.confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
            alert("Account deleted.");
        }
    };

    return (
        <div className={`settings-page ${isDarkMode ? "dark" : "light"}`}>
            <h1>Settings</h1>

            <section className="settings-section">
                <h2>Profile Settings</h2>
                <form onSubmit={handleSaveProfile}>
                    <label>
                        Name:
                        <input type="text" placeholder="Enter your name" />
                    </label>
                    <label>
                        Email:
                        <input type="email" placeholder="Enter your email" />
                    </label>
                    <button type="submit">Save Profile</button>
                </form>
            </section>

            <section className="settings-section">
                <h2>Preferences</h2>
                <div className="toggle">
                    <label>
                        Dark Mode:
                        <input type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                    </label>
                </div>
                <div className="toggle">
                    <label>
                        Notifications:
                        <input
                            type="checkbox"
                            checked={notificationsEnabled}
                            onChange={(e) => setNotificationsEnabled(e.target.checked)}
                        />
                    </label>
                </div>
            </section>

            <section className="settings-section">
                <h2>Privacy</h2>
                <button onClick={handleExportData}>Export Data</button>
                <button className="delete-account" onClick={handleDeleteAccount}>
                    Delete Account
                </button>
            </section>

            <section className="settings-section">
                <h2>Account Management</h2>
                <button>Log Out</button>
            </section>
        </div>
    );
};

export default SettingsPage;