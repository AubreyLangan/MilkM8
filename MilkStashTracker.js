import React, { useState } from "react";
import { useFeedData } from "../Contexts/FeedDataContext";
import styles from "./MilkStashTracker.module.css";

const MilkStashTracker = () => {
    const { milkStash, addMilkStash, updateMilkStash, removeMilkStash } = useFeedData();
    const [amount, setAmount] = useState("");
    const [location, setLocation] = useState("fridge");
    const [editingId, setEditingId] = useState(null);
    const [alertMessage, setAlertMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount) {
            alert ("Please enter an amount.");
            return;
        }

        const newEntry = {
            id: editingId || Date.now(),
            amount: parseFloat(amount),
            location: location || "fridge",
        };

        if (editingId) {
            updateMilkStash(newEntry);
            setAlertMessage("Milk stash updated successfully!");
        } else {
            addMilkStash(newEntry);
            setAlertMessage("Milk stash added successfully!")
        }

        resetForm();

        setTimeout(() => {
            setAlertMessage("");
        }, 3000);
    };

    const resetForm = () => {
        setAmount("");
        setLocation("fridge");
        setEditingId(null);
    };

    const handleEdit = (entry) => {
        setAmount(entry.amount);
        setLocation(entry.location);
        setEditingId(entry.id);
    };

    const handleDelete = (id) => {
        removeMilkStash(id);
        setAlertMessage("Milk stash entry removed successfully!");
        setTimeout(() => {
            setAlertMessage("");
        }, 3000);
    };

    const formatLocation = (loc) => {
        if (loc === "fridge") return "Fridge";
        if (loc === "freezer") return "Freezer";
        if (loc === "deepFreezer") return "Deep Freezer";
        return "Unknown";
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Milk Stash Tracker</h2>

            {alertMessage && <div className={styles.alert}>{alertMessage}</div>}

            <form onSubmit={handleSubmit} className={styles.form}>
                <label>
                    Amount (oz):
                    <input
                        type="number"
                        step="0.1"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        className={styles.input}
                    />
                </label>
                <label>
                    Storage Location:
                    <select value={location} onChange={(e) => setLocation(e.target.value)}>
                        <option value="fridge">Fridge</option>
                        <option value="freezer">Freezer</option>
                        <option value="deepFreezer">Deep Freezer</option>
                    </select>
                </label>
                <button type="submit" className={styles.button}>{editingId ? "Save Changes" : "Add Milk"}</button>
            </form>

            <h3 className={styles.subtitle}>Current Milk Stash</h3>
            {milkStash.length === 0 ? (
                <p className={styles.noData}>No milk stored yet.</p>
            ) : (
                <ul className={styles.list}>
                {milkStash.map((entry) => (
                    <li key={entry.id} className={styles.listItem}>
                        <span className={styles.milkAmount}>
                            {entry.amount} Oz - {formatLocation(entry.location)}
                        </span>
                        <div className="styles.action">
                            <button onClick={() => handleEdit(entry)}>Edit</button>
                            <button onClick={() => handleDelete(entry.id)}>Remove</button>
                        </div>
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
};

export default MilkStashTracker;