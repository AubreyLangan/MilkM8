import React, { useState } from "react";
import './WeaningCalculator.css';

const WeaningCalculator = () => {
   const [currentSupply, setCurrentSupply] = useState("");
   const [goalSupply, setGoalSupply] = useState("");
   const [timeframe, setTimeframe] = useState("");
   const [schedule, setSchedule] = useState([]);

   const calculateWeaningSchedule = (current, goal, days) => {
    const totalDecrease = current - goal;
    const dailyDecrease = totalDecrease / days;

    const schedule = [];
    for (let i = 1; i <= days; i++) {
        const dailyAmount = Math.max(current - dailyDecrease * i, goal);
        schedule.push({ day: i, amount: dailyAmount.toFixed(2) });
    }

    return schedule;
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentSupply || !goalSupply || !timeframe) {
        alert("Please fill in all fields.");
        return;
    }

    const calculatedSchedule = calculateWeaningSchedule(
        parseFloat(currentSupply),
        parseFloat(goalSupply),
        parseFloat(timeframe, 10)
    );

    setSchedule(calculatedSchedule);
   };

   return (
    <div className="weaning-calculator">
        <h1>Weaning Calulator</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Current Daily Supply (Oz):
                <input
                    type="number"
                    step="o.1"
                    value={currentSupply}
                    onChange={(e) => setCurrentSupply(e.target.value)}
                />
            </label>
            <label>
                Goal Daily Supply (Oz):
                <input
                    type="number"
                    step="0.1"
                    value={goalSupply}
                    onChange={(e) => setGoalSupply(e.target.value)}
                />
            </label>
            <label>
                Timeframe (Days):
                <input
                    type="number"
                    step="1"
                    value={timeframe}
                    onChange={(e) => setTimeframe(e.target.value)}
                />
            </label>
            <button type="submit">Calculate</button>
        </form>

        {schedule.length > 0 && (
            <div className="schedule">
                <h2>Weaning Schedule</h2>
                <ul>
                    {schedule.map((entry) => (
                        <li key={entry.day}>
                            Day {entry.day}: {entry.amount} Oz
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </div>
   );
};

export default WeaningCalculator;