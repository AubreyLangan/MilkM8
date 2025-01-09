import React, { useState } from "react";
import './FeedTracker.css'; 
import { useTheme } from "../utils/ThemeContext";

const FeedTracker = ({ addEntry, entries = [] }) => {
    const { isDarkMode } = useTheme();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [amount, setAmount] = useState("");
    const [notes, setNotes] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date || !time || !amount) {
            alert("Please fill out all required fields.");
            return;
        }

        const newEntry = {
            id: Date.now(),
            date,
            time,
            amount,
            notes,
        };

        addEntry(newEntry);
        setAlertMessage("Your feed session has been logged successfully!");

        setTimeout(() => {
            setAlertMessage("");
        }, 3000);

        setDate("");
        setTime("");
        setAmount("");
        setNotes("");
    };

    return (
        <div className={`feed-tracker ${isDarkMode ? "dark" : "light"}`}>
            <h2>Feed Tracker</h2>

            {alertMessage && (
                <div className="alert alert-success">
                    {alertMessage}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <label>
                    Date:
                    <input 
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Time:
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </label>
                <label>
                    Amount (Oz):
                    <input
                        type="number"
                        step="0.1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>
                <label>
                    Notes:
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Optional notes..."
                    />
                </label>
                <button type="submit">Add Feed</button>
            </form>

            <h3>Feeding Log</h3>
            <ul>
                {entries.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.date} {entry.time}</strong> - {entry.amount} Oz
                        <br />
                        <em>{entry.notes || "No notes"}</em>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedTracker;