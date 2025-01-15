import { useEffect } from "react";
import { useReminders } from "../Contexts/ReminderContext";

const ReminderWatcher = () => {
    const { reminders } = useReminders();

    useEffect(() => {
        const checkReminders = () => {
            const now = new Date();
            reminders.forEach((reminder) => {
                const reminderTime = new Date(`${reminder.date}T${reminder.time}`);
                if (reminderTime <= now) {
                    alert(`Reminder: ${reminder.title}`);
                }
            });
        };

        const interval = setInterval(checkReminders, 6000);
        return () => clearInterval(interval);
    }, [reminders]);

    return null;
};

export default ReminderWatcher;