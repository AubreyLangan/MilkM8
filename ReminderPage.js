import React, { useState } from "react";
import { useReminders } from "../Contexts/ReminderContext";

const ReminderPage = () => {
    const { reminders, addReminder, deleteReminder, updateReminder } = useReminders();
    const [newReminder, setNewReminder] = useState({ title: "", date: "", time: "" });
    const [editingId, setEditingId] = useState("");
    const [editedReminder, setEditedReminder] = useState({ title: "", date: "", time: "" })
    
    const handleAddReminder = () => {
        if (!newReminder.title || !newReminder.date || !newReminder.time) {
            alert("Please fill out all fields to add a reminder.");
            return;
        }
        addReminder({ id: Date.now(), ...newReminder });
        setNewReminder({ title: "", date: "", time: "" });
    };

    const handleEditClick = (reminder) => {
        setEditingId(reminder.id);
        setEditedReminder({
            title: reminder.title,
            date: reminder.date,
            time: reminder.time,
        });
    };

    const handleSaveEdit = () => {
        if (!editedReminder.title || !editedReminder.date || !editedReminder.time) {
            alert("Please fill out all fields to save the reminder.");
            return;
        }
        updateReminder(editingId, editedReminder);
        setEditingId(null);
        setEditedReminder({ title: "", date: "", time: "" });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditedReminder({ title: "", date: "", time: "" });
    };

    return (
        <div>
            <h2>Reminders</h2>
            <div>
                <input
                    type="text"
                    value={newReminder}
                    onChange={(e) => setNewReminder({...newReminder, title: e.target.value})}
                    placeholder="Reminder Title"
                />
                <input
                    type="date"
                    value={newReminder.date}
                    onChange={(e) => setNewReminder({ ...newReminder, date: e.target.value })}
                />
                <input
                    type="time"
                    value={newReminder.time}
                    onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                />
                <button onClick={handleAddReminder}>Add Reminder</button>
            </div>
            <ul>
                {reminders.map((reminder) =>
                editingId === reminder.id ? (
                    <li key={reminder.id}>
                        <input
                            type="text"
                            value={editedReminder.title}
                            onChange={(e) =>
                                setEditedReminder({ ...editedReminder, title: e.target.value })
                            }
                            placeholder="Title"
                        />
                        <input
                            type="date"
                            value={editedReminder.date}
                            onChange={(e) =>
                                setEditedReminder({ ...editedReminder, time: e.target.value })
                            }
                        />
                        <button onClick={handleSaveEdit}>Save</button>
                        <button onClick={handleCancelEdit}>Cancel</button>
                    </li>
                ) : (
                    <li key={reminder.id}>
                        <strong>{reminder.title}</strong> - {reminder.date} {reminder.time}
                        <button onClick={() => handleEditClick(reminder)}>Edit</button>
                        <button onClick={() => deleteReminder(reminder.id)}>Delete</button>
                    </li>
                )
                )}
            </ul>
        </div>
    );
};

export default ReminderPage;