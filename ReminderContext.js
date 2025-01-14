import React, { createContext, useContext, useState } from "react";

const ReminderContext = createContext();

export const useReminders = () => useContext(ReminderContext);

export const ReminderProvider = ({ children }) => {
    const [reminders, setReminders] = useState([]);

    const addReminder = (reminder) => {
        setReminders([...reminders, reminder]);
    };

    const removeReminder = (id) => {
        setReminders(reminders.filter((reminder) => reminder.id !== id));
    };

    return (
        <ReminderContext.Provider value={{ reminders, addReminder, removeReminder }}>
            {children}
        </ReminderContext.Provider>
    );
};