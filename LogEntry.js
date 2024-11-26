import React from "react";
import LogEntryForm from '../Components/LogEntryForm';

const LogEntry = ({ addEntry, entries = [] }) => {
    const sortedEntries = [...entries].sort((a, b) => b.id - a.id);

    return (
        <div>
            <h1>Log Your Milk</h1>
            <LogEntryForm onSubmit={addEntry}/>
            <h2>Logged Entries:</h2>
            <ul>
                {sortedEntries.map((entry) => (
                    <li key={entry.id}>
                        {entry.id} - {entry.time}: {entry.quantity} {entry.unit} ({entry.notes || "No notes"})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogEntry;