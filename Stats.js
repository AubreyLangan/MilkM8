import React from "react";
import StatsSummary from '../Components/StatsSummary';

const Stats = ({ entries }) => {
    return (
        <div>
            <h1>Statistics</h1>
            <StatsSummary entries={entries} />
        </div>
    );
};

export default Stats;