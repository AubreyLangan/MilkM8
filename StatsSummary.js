import React from "react";

const StatsSummary = ({ entries }) => {

    const ozEntries = entries.filter((entry) => entry.unit === 'oz');
    const mlEntries = entries.filter((entry) => entry.unit === 'mL');

    const totalOz = ozEntries.reduce((sum, entry) => sum + parseFloat(entry.quantity), 0);
    const averageOz = ozEntries.length > 0 ? (totalOz / ozEntries.length).toFixed(2) : 0;

    const totalMl = mlEntries.reduce((sum, entry) => sum + parseFloat(entry.quantity), 0);
    const averageMl = mlEntries.length > 0 ? (totalMl / mlEntries.length).toFixed(2) : 0;

    return (
        <div className="stats-summary">
            <h2>Summary</h2>

            {ozEntries.length > 0 && (
                <div>
                    <h3>Ounces (oz)</h3>
                    <p>Total: {totalOz} oz</p>
                    <p>Average: {averageOz} oz/session</p>
                </div>
            )}

            {mlEntries.length > 0 && (
                <div>
                    <h3>Mililiters (mL)</h3>
                    <p>Total: {totalMl} mL</p>
                    <p>Average: {averageMl} mL/session</p>
                </div>
            )}

            {entries.length === 0 && <p>No data logged yet.</p>}
        </div>
    );
};

export default StatsSummary;