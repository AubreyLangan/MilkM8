import React from "react";
import { useNavigate } from "react-router-dom";
import TipsGenerator from "../Components/TipsGenerator";
import { useTheme } from "../utils/ThemeContext";
import AnalyticsDashboard from "../Components/AnalyticsDashboard";
import FeedStatistics from "../Components/FeedStatistics";
import MilkStashTracker from "../Components/MilkStashTracker";

const Home = ({ entries = [] }) => {
    const { isDarkMode } = useTheme();
    const navigate = useNavigate();
    const totalMilk = entries.reduce((total, entry) => total + Number(entry.quantity || 0), 0);
    const lastEntry = entries[entries.length - 1] || {};

    return (
        <div className={`home ${isDarkMode ? "dark" : "light"}`}>
            <h1>Welcome to MilkM8</h1>
            <p>Your trusted companion for tracking pumping sessions.</p>

            <MilkStashTracker />

            <div className="summary">
                <FeedStatistics />
                <p><strong>Total Milk Logged:</strong> {totalMilk.toFixed(2)} {lastEntry.unit || 'oz'}</p>
                {lastEntry.date && (
                    <p><strong>Last Session:</strong> {lastEntry.date} at {lastEntry.time} </p>
                )}
            </div>

            <div className="cta-buttons">
                <button onClick={() => navigate('/log-entry')}>Log a Session</button>
                <button onClick={() => navigate('/stats')}>View Stats</button>
                <button onClick={() => navigate('/feed-tracker')}>Log a Feed</button>
            </div>

            <h2>Recent Entries</h2>
            <ul>
                {entries.slice(0, 3).map((entry) => (
                    <li key={entry.id}>
                        {entry.date} - {entry.quantity} {entry.unit} ({entry.notes || "No notes"})
                    </li>
                ))}
            </ul>

            <div className="tips">
                <TipsGenerator />
            </div>

            <div className="analytics">
                <AnalyticsDashboard />
            </div>
        </div>
    );
};

export default Home;