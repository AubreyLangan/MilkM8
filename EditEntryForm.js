import React, { useState } from "react";

const EditEntryForm = ({ entry, onUpdate, onCancel }) => {
    const [quantity, setQuantity] = useState(entry.quantity);
    const [unit, setUnit] = useState(entry.unit || "oz");
    const [time, setTime] = useState(entry.time || "")
    const [notes, setNotes] = useState(entry.notes || "");

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            ...entry,
            quantity,
            unit,
            time,
            notes,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Edit Entry</h2>
            <div>
                <label>
                    Quantity:
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Unit:
                    <input
                        type="text"
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Time:
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    Notes:
                    <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="Notes (optional"
                    />
                </label>
            </div>
            <button type="submit" style={{ backgroundColor: "#0288d1", color:"#fff" }}>Save</button>
            <button type="button" onClick={onCancel} style={{ marginLeft: "10px" }}>Cancel</button>
        </form>
    );
};

export default EditEntryForm;