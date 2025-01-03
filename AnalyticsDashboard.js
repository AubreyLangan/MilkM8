import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";

const AnalyticsDashboard = ({ logs }) => {
    const [daateRange, setDateRange] = useState("last7days");

    const lineChartData = {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
            {
                label: "Feeding Sessions",
                data: [3, 5, 2, 4, 6, 3, 7],
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
        ],
    };

    const pieChartData = {
        labels: ["Breastfeeding", "Pumping", "Formula"],
        datasets: [
            {
                data: [50, 30, 20],
                backgroundColor: ["FF6384", "#36A2EB", "FFCE56"],
            },
        ],
    };

    const handleDateRangeChange = (e) => {
        setDateRange(e.target.value);
    };

    return (
        <div className="analytics-dashboard">
            <h1>Analytics Dashboard</h1>

            <div className="filters">
                <label>Date Range:</label>
                <select value={dateRange} onChange={handleDateRangeChange}>
                    <option value="last7days">Last 7 Days</option>
                    <option value="month">This Month</option>
                    <option value={custom}>Custom</option>
                </select>
            </div>

            <div className="summary-metrics">
                <div className="metric">
                    <h2>Total Milestones</h2>
                    <p>15</p>
                </div>
                <div className="metric">
                    <h2>Average Session Time</h2>
                    <p>25 minutes</p>
                </div>
                <div className="metric">
                    <h2>Most Active Day</h2>
                    <p>Monday</p>
                </div>
            </div>

            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <ul>
                    <li>Milestone: First words logged on 2024-12-01</li>
                    <li>Feeding Session: 30 mins on 2024-12-02</li>
                    <li>Pumping Session: 4 oz on 2024-12-03</li>
                </ul>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;