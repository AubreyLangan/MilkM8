import React from "react";
import { useReminders } from "../Contexts/ReminderContext";

const ReminderList = () => {
    const { reminders, removeReminder } = useReminders();

    const handleRemove = (id) => {
        removeReminder(id);
    };

    return (
        <div>
            <h3>Reminders</h3>
            <ul>
                {reminders.map((reminder) => (
                    <li key={reminder.id}>
                        <strong>{reminder.title}</strong> - {reminder.date} {reminder.time}
                        <button onClick={() => handleRemove(reminder.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReminderList;