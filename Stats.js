import React from "react";
import StatsSummary from '../Components/StatsSummary';
import { useTheme } from "../utils/ThemeContext";

const Stats = ({ entries }) => {
    const totalMilk = entries.reduce((total, entry) => {
        const quantity = parseFloat(entry.quantity);
        return total + (isNaN(quantity) ? 0 : quantity);
    }, 0);
    const { isDarkMode } = useTheme();


    return (
        <div className={`stats ${isDarkMode ? "dark" : "light"}`}>
            <h1>Statistics</h1>
            <p>Total Milk Logged: {totalMilk.toFixed(2)} {entries.length > 0 ? entries[0].unit : 'oz'}</p>
            <StatsSummary entries={entries} />
        </div>
    );
};

export default Stats;