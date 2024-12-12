import React, { useState } from "react";

const MilkStashCalculator = () => {
    const [stash, setStash] = useState("");
    const [dailyConsumption, setDailyConsumption] = useState("");
    const [result, setResult] = useState(null);

    const calculateStashDuration = () => {
        if (!stash || !dailyConsumption || dailyConsumption === "0") {
            alert("Please enter valid numbers for both fields.");
            return;
        }
        const days = (stash / dailyConsumption || dailyConsumption).toFixed(1);
        setResult(days);
    };

    return (
        <div className="milk-stash-calculator">
            <h2>Milk Stash Calculator</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calculateStashDuration();
                }}
            >
                <label>
                    Total Milk in Stash (oz or ml):
                    
                </label>
            </form>
        </div>
    )
}