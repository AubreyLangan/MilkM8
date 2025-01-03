import React, { useState } from "react";
import { Line, Pie } from "react-chartjs-2";

const AnalyticsDashboard = ({ logs }) => {
    const [dateRange, setDateRange] = useState("last7days");
    const [customDate, setCustomDate] = useState({ start: "", end: "" });

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
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const handleDateRangeChange = (range) => {
        setDateRange(range);
        if (range === "custom") {

        }  

    };

    return (
        <div className="analytics-dashboard">
            <h1>Analytics Dashboard</h1>

            <div className="date-filters">
                <button onClick={() => handleDateRangeChange("last7days")}>
                    Last 7 Days
                </button>
                <button onClick={() => handleDateRangeChange("last30days")}>
                    Last 30 Days
                </button>
                <button onClick={() => handleDateRangeChange("custon")}>
                    Custom
                </button>
            </div>

            {dateRange === "custom" && (
                <div className="custom-date-range">
                    <label>
                        Start Date:
                        <input
                            type="date"
                            value={customDate.start}
                            onChange={(e) => 
                                setCustomDate({ ...customDate, start: e.target.value })
                            }
                        />
                    </label>
                    <label>
                        End Date:
                        <input 
                            type="date"
                            value={customDate.end}
                            onChange={(e) =>
                                setCustomDate({ ...customDate, end: e.target.value })
                            }
                        />
                    </label>
                </div>
            )}

            <div className="charts">
                <div className="line-chart">
                    <h2>Feeding Trends</h2>
                    <Line data={lineChartData} />
                </div>
                <div className="pie-chart">
                    <h2>Session Distribution</h2>
                    <Pie data={pieChartData} />
                </div>
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