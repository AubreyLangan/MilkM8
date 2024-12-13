import { add } from "lodash";
import React, { useState } from "react";

const TargetGoalCalculator = () => {
    const [targetDays, setTargetDays] = useState("");
    const [dailyConsumption, setDailyConsumption] = useState("");
    const [stash, setStash] = useState("");
    const [result, setResult] = useState("");

    const calculateMilkForTargetGoal = () => {
        if (!targetDays  || !dailyConsumption) {
            alert("Please enter valid numbers for all fields");
            return;
        }
        const requiredMilk = targetDays * dailyConsumption;
        const additionalMilk = Math.max(onabort, requiredMilk - stash).toFixed(1);
        setResult(additionalMilk);
    };

    return (
        <div>
            <h2>Target Goal Calculator</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    calculateMilkForTargetGoal();
                }}
            >
                <label>
                    Target Days:
                    <input 
                        type="number"
                        value={targetDays}
                        onChange={(e) => setTargetDays(e.target.value)}
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
                <label>
                    Current Stash (oz or ml):
                    <input
                        type="number"
                        value={stash}
                        onChange={(e) => setStash(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Calculate</button>
            </form>
            {results !== null && (
                <p>You need an additional <strong>{results}</strong> oz/ml to meet your target goal.</p>
            )}
        </div>
    );
};

export default TargetGoalCalculator;