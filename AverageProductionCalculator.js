import React from "react";

const AverageProductionCalculator = ({ entries = [] }) => {
    if (entries.length === 0) {
        return <p>No entries available for calculation.</p>;
    }

    const totalMilk = entries.reduce((sum, entry) => sum + entry.quantity, 0);
    const averageMilk = (totalMilk / entries.length).toFixed(1);

    return (
        <div>
            <h2>Average Milk Production Calculator </h2>
            <p>Your average production is <strong>{averageMilk}</strong> oz/ml per session.</p>
        </div>
    );
};

export default AverageProductionCalculator;