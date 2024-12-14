import React, { useState } from "react";
import './Calculator.css';

const MilkStashCalculator = () => {
    const [stash, setStash] = useState("");
    const [dailyConsumption, setDailyConsumption] = useState("");
    const [result, setResult] = useState(null);

    const calculateStashDuration = () => {
        const stashValue = parseFloat(stash) || 0;
        const consumptionValue = parseFloat(dailyConsumption) || 0;

        if (!stashValue || !consumptionValue) {
            alert("Please enter valid numbers for both fields.");
            return;
        }
        const days = (stash / consumptionValue).toFixed(1);
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
                    <input
                        type="number"
                        value={stash}
                        onChange={(e) => setStash(e.target.value)}
                        placeholder="Enter stash amount"
                        required
                    />
                </label>
                <label>
                    Baby's Daily Consumption (oz or ml):
                    <input 
                        type="number"
                        value={dailyConsumption}
                        onChange={(e) => setDailyConsumption(e.target.value)}
                        placeholder="Enter daily consumption"
                        required
                    />
                </label>
                <button type="submit">Calculate</button>
            </form>
            {result !== null && (
                <div className="result">
                    <p>
                        Your stash will last approximately <strong>{result}</strong> days.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MilkStashCalculator;