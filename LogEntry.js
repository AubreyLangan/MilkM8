import React, { useState } from "react";
import LogEntryForm from '../Components/LogEntryForm';
import EditEntryForm from "../Components/EditEntryForm";

const LogEntry = ({ addEntry, entries = [], deleteEntry, updateEntry }) => {
    const [editingEntry, setEditingEntry] = useState(null);

    const sortedEntries = [...entries].sort((a, b) => b.id - a.id);

    const handleEdit = (entry) => {
        setEditingEntry(entry);
    };

    const handleUpdate = (updatedEntry) => {
        updateEntry(updatedEntry);
        setEditingEntry(null);
    };

    return (
        <div>
            <h1>Log Your Milk</h1>
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