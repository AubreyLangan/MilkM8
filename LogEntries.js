import React, { useState } from "react";
import PumpEntry from "./PumpEntry";
import EditEntryForm from "./EditEntryForm";

const LogEntries = ({ entries, updateEntry }) => {
    const [editingEntry, setEditingEntry] = useState(null);

    const handleEdit = (entry) => {
        setEditingEntry(entry);
    };

    const handleUpdate = (updatedEntry) => {
        updateEntry(updatedEntry);
        setEditingEntry(null);
    };

    return (
        <div>
            <h1>Log Entries</h1>
            <ul>
                {entries.map((entry) => (
                    <PumpEntry 
                        key={entry.id} 
                        entry={entry} 
                        onEdit={handleEdit} 
                    />
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

export default LogEntries;