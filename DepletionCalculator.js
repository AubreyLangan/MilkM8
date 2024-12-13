import React, { useState } from "react";

const DepletionCalculator = () => {
    const [stash, setStash] = useState("");
    const [dailyConsumption, setDailyConsumption] = useState("");
    const [result, setResult] = useState("");

    const calculateDepletionDays = () => {
        if (!stash || !dailyConsumption || dailyConsumption === "0") {
            alert("Please enter valid numbers for both fields.");
            return;
        }
        const days = (stash / dailyConsumption).toFixed(1);
        setResult(days);
    };

    return (
        <div>
            <h2>Days until Depletion</h2>
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    calculateDepletionDays();
                }}
            >
                <label>
                    Total Milk in Stash (oz or ml):
                    <input
                        type="number"
                        value={stash}
                        onChange={(e) => setStash(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Baby's Daily Consumption (oz or ml):
                    <input
                        type="number"
                        value={dailyConsumption}
                        onChange={(e) => setDailyConsumption(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Calculate</button>
            </form>
            {result !== null && (
                <p>Your stash will last approximately <strong>{result}</strong> days.</p>
            )}
        </div>
    );
};

export default DepletionCalculator;