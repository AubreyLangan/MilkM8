import React, { useState } from "react";
import './FeedTracker.css'; 
import { useTheme } from "../utils/ThemeContext";
import { useFeedData } from "../Contexts/FeedDataContext";

const FeedTracker = ({ addEntry, entries = [] }) => {
    const { isDarkMode } = useTheme();
    const { feedData, addFeedData, updateFeedData, deleteFeedData } = useFeedData();
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [amount, setAmount] = useState("");
    const [feedType, setFeedType] = useState("Breastfeeding");
    const [notes, setNotes] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [editingId, setEditingId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!date || !time || !amount) {
            alert("Please fill out all required fields.");
            return;
        }

        const newEntry = {
            id: editingId || Date.now(),
            date,
            time,
            amount,
            feedType,
            notes,
        };

        if (editingId) {
            updateFeedData(newEntry);
            setAlertMessage("Feed entry updated successfully!");
        } else {
            addFeedData(newEntry);
            setAlertMessage("Feed entry added successfully!")
        }

        resetForm();

        setTimeout(() => {
            setAlertMessage("");
        }, 3000);
    };

    const resetForm = () => {
        setDate("");
        setTime("");
        setAmount("");
        setFeedType("Breastfeeding");
        setNotes("");
        setEditingId(null);
    };

    const handleEdit = (entry) => {
        setDate(entry.date);
        setTime(entry.time);
        setAmount(entry.amount);
        setFeedType(entry.feedType);
        setNotes(entry.notes);
        setEditingId(entry.id);
    };

    const handleDelete = (id) => {
        deleteFeedData(id);
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
                    Feed Type:
                    <select
                        value={feedType}
                        onChange={(e) => setFeedType(e.target.value)}
                        required
                    >
                        <option value="Breastfeeding">Breastfeeding</option>
                        <option value="Formula">Formula</option>
                        <option value="Pumping">Pumping</option>
                    </select>
                </label>
                <label>
                    Notes:
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Optional notes..."
                    />
                </label>
                <button type="submit">{editingId ? "Save Changes" : "Add Feed"}</button>
            </form>

            <h3>Feeding Log</h3>
            <ul>
                {feedData.map((entry) => (
                    <li key={entry.id}>
                        <strong>{entry.date} {entry.time}</strong> -{entry.amount} Oz
                        <br />
                        <em>{entry.notes || "No notes"}</em>
                        <div>
                            <button onClick={() => handleEdit(entry)}>Edit</button>
                            <button onClick={() => handleDelete(entry.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedTracker;