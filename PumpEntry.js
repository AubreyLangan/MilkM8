import React from "react";

const PumpEntry = ({ entry, onEdit }) => {
    return (
        <li>
            {entry.date} - {entry.quantity} {entry.unit} ({entry.notes || "No notes"})
            <button
                onClick={() => onEdit(entry)}
                style={{
                    backgroundColor: "#0288d1",
                    color: "ffffff",
                    border: "none",
                    marginLeft: "10px",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Edit
            </button>
        </li>
    );
};

export default PumpEntry;