import React, { createContext, useContext, useState } from "react";

const ReminderContext = createContext();

export const useReminders = () => useContext(ReminderContext);

export const ReminderProvider = ({ children }) => {
    const [reminders, setReminders] = useState([]);

    const addReminder = (reminder) => {
        setReminders((prev) => [...prev, reminder]);
    };

    const deleteReminder = (id) => {
        setReminders((prev) => prev.filter((reminder) => reminder.id));
    };
    
    const updateReminder = (updatedReminder) => {
        setReminders((prev) =>
        prev.map((reminder) => (reminder.id === updatedReminder.id ? updatedReminder : reminder)))
    };
    return (
        <ReminderContext.Provider value={{ reminders, addReminder, deleteReminder, updateReminder }}>
            {children}
        </ReminderContext.Provider>
    );
};