import React, { useState } from "react";
import './UserProfile.css';

const UserProfile = ({
    updatedUser = () => console.warn("No updatedUser function provided"),
    userData = {
        name: "",
        babyName: "",
        unit: "oz",
        goal: "",
    },
}) => {
    const [name, setName] = useState(userData.name || "");
    const [babyName, setBabyName] = useState(userData.babyName || "");
    const [unit, setUnit] = useState(userData.unit || "oz");
    const [goal, setGoal] = useState(userData.goal || "");
    const [feedback, setFeedback] = useState("");

    const handleSave = () => {
        const updatedProfile = { name, babyName, unit, goal };

        if (typeof updatedUser === "function") {
            updatedUser(updatedProfile);
            setFeedback("Profile updated successfully!");
            setTimeout(() => setFeedback(""), 3000);
        } else {
            console.error("updatedUser is not a function");
            setFeedback("Failed to save profile.");
        }
    };
    
    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                    />
                </label>
                <label>
                    Baby's Name:
                    <input
                        type="text"
                        value={babyName}
                        onChange={(e) => setBabyName(e.target.value)}
                        placeholder="Your baby's name"
                    />
                </label>
                <label>
                    Measurement Unit:
                    <select value={unit} onChange={(e) => setUnit(e.target.value)}>
                        <option value="oz">Ounces</option>
                        <option value="ml">Mililiters</option>
                    </select>
                </label>
                <label>
                    Daily Pumping Goal (oz or ml):
                    <input
                        type="number"
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        placeholder="Set your goal"
                    />
                </label>
                <button type="button" onClick={handleSave}>
                    Save Profile
                </button>
            </form>
            {feedback && <p className="feedback-message">{feedback}</p>}
        </div>
    );
};

export default UserProfile;