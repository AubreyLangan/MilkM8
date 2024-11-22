import React from "react";

const LogEntryList = ({ entries, deleteEntry }) => (
    <div>
        <h2>Pumping Log</h2>
        <ul>
            {entries.map((entry) => (
                <li key={entry.id}>
                    <p>Date: {entry.date}</p>
                    <p>Time: {entry.time}</p>
                    <p>Quantity: {entry.quantity} {entry.unit}</p>
                    <p>Notes: {entry.notes}</p>
                    <button onClick={() => deleteEntry(entry.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
);

export default LogEntryList;