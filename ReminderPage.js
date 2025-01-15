import React, { useState } from "react";
import { useReminders } from "../Contexts/ReminderContext";

const ReminderPage = () => {
    const { reminders, addReminder, deleteReminder } = useReminders();
    const [newReminder, setNewReminder] = useState("");
    
    const handleAddReminder = () => {
        addReminder({ id: Date.now(), text: newReminder });
        setNewReminder("");
    };

    return (
        <div>
            <h2>Reminders</h2>
            <input
                type="text"
                value={newReminder}
                onChange={(e) => setNewReminder(e.target.value)}
                placeholder="Add a new reminder"
            />
            <button onClick={handleAddReminder}>Add Reminder</button>
            <ul>
                {reminders.map((reminder) => (
                    <li key={reminder.id}>
                        {reminder.text}{" "}
                        <button onClick={() => deleteReminder(reminder.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReminderPage;