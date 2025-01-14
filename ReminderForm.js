import React, { useState } from "react";
import { useReminders } from "../Contexts/ReminderContext";

const ReminderForm = () => {
    const { addReminder } = useReminders();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const id = Date.now();
        const reminder = {
            id,
            title,
            date,
            time,
        };

        addReminder(reminder);
        setTitle("");
        setDate("");
        setTime("");

        alert("Reminder set!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Title:
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </label>
            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </label>
            <label>
                Time:
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Add Reminder</button>
        </form>
    );
};

export default ReminderForm;