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
    
    const updateReminder = (id, updatedReminder) => {
        setReminders((prevReminders) =>
            prevReminders.map((reminder) =>
                reminder.id === id ? { ...reminder, ...updatedReminder } : reminder
            )
        );
    };
    return (
        <ReminderContext.Provider value={{ reminders, addReminder, deleteReminder, updateReminder }}>
            {children}
        </ReminderContext.Provider>
    );
};