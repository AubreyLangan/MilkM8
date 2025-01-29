import React, { useState } from "react";
import { useFeedData } from "../Contexts/FeedDataContext";

const MilkStashTracker = () => {
    const { milkStash, addMilkStash, removeMilkStash } = useFeedData();
    const [amount, setAmount] = useState("");
    const [location, setLocation] = useState("fridge");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!amount || amount <= 0) return alert("Enter a valid amount");

        addMilkStash(parseFloat(amount), location);
        setAmount("");
    };

    return (
        <div className="milk-stash-tracker">
            <h2>Milk Stash Tracker</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Amount (oz):
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
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
                <button type="submit">Add to Stash</button>
            </form>

            <h3>Current Milk Stash</h3>
            <ul>
                <li>Fridge: {milkStash.fridge} oz</li>
                <li>Freezer: {milkStash.freezer} oz</li>
                <li>Deep Freezer: {milkStash.deepFreezer} oz</li>
            </ul>
        </div>
    );
};

export default MilkStashTracker;