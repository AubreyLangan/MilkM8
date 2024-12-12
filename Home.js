import React from "react";
import { useNavigate } from "react-router-dom";
import TipsGenerator from "../Components/TipsGenerator";
import MilkStashCalculator from "../Components/Calculator";

const Home = ({ entries = [] }) => {
    const navigate = useNavigate();
    const totalMilk = entries.reduce((total, entry) => total + Number(entry.quantity || 0), 0);
    const lastEntry = entries[entries.length - 1] || {};

    return (
        <div className="home">
            <h1>Welcome to MilkM8</h1>
            <p>Your trusted companion for tracking pumping sessions.</p>

            <div className="summary">
                <p><strong>Total Milk Logged:</strong> {totalMilk.toFixed(2)} {lastEntry.unit || 'oz'}</p>
                {lastEntry.date && (
                    <p><strong>Last Session:</strong> {lastEntry.date} at {lastEntry.time} </p>
                )}
            </div>

            <div className="cta-buttons">
                <button onClick={() => navigate('/log-entry')}>Log a Session</button>
                <button onClick={() => navigate('/stats')}>View Stats</button>
            </div>

            <h2>Recent Entries</h2>
            <ul>
                {entries.slice(0, 3).map((entry) => (
                    <li key={entry.id}>
                        {entry.date} - {entry.quantity} {entry.unit} ({entry.notes || "No notes"})
                    </li>
                ))}
            </ul>

            <div>
                <h2>Milk Stash Calculator</h2>
                <MilkStashCalculator />
            </div>

            <div className="tips">
                <TipsGenerator />
            </div>
        </div>
    );
};

export default Home;