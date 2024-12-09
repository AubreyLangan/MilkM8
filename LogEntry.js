import React, { useState } from "react";
import LogEntryForm from '../Components/LogEntryForm';
import EditEntryForm from "../Components/EditEntryForm";
import Timer from "../Components/Timer";
import ClockTimer from "../Components/ClockTimer";

const LogEntry = ({ addEntry, entries = [], deleteEntry, updateEntry }) => {
    const [editingEntry, setEditingEntry] = useState(null);
    const [showClock, setShowClock] = useState(false);

    const sortedEntries = [...entries].sort((a, b) => b.id - a.id);

    const handleEdit = (entry) => {
        setEditingEntry(entry);
    };

    const handleUpdate = (updatedEntry) => {
        updateEntry(updatedEntry);
        setEditingEntry(null);
    };

    const handleTimerSubmit = ({ time }) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        const entry = {
            id: Date.now(),
            quantity: 0,
            time: `${minutes}m ${seconds}s`,
            unit: 'Oz',
            date: new Date().toLocaleDateString(),
            notes: 'Added via Timer',
        };

        addEntry(entry);
    };

    return (
        <div>
            <h1>Log Your Milk</h1>

            <button onClick={() => setShowClock(!showClock)}>
                {showClock ? "Switch to Timer" : "Switch to Clock Timer"}
            </button>

            {showClock ? (
                <ClockTimer onSubmit={handleTimerSubmit} />
            ) : (
                <Timer onSubmit={handleTimerSubmit} />
            )}
            
            <LogEntryForm onSubmit={addEntry}/>
            <h2>Logged Entries:</h2>
            <ul>
                {sortedEntries.map((entry) => (
                    <li key={entry.id}>
                        {entry.id} - {entry.time}: {entry.quantity} {entry.unit} ({entry.notes || "No notes"})
                        <button onClick={() => deleteEntry(entry.id)}>Delete</button>
                        <button onClick={() => handleEdit(entry)}>Edit</button>
                    </li>
                ))}
            </ul>

            {editingEntry && (
                <EditEntryForm
                    entry={editingEntry}
                    onUpdate={handleUpdate}
                    onCancel={() => setEditingEntry(null)}
                />
            )}
        </div>
    );
};

export default LogEntry;