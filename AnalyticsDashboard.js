import React, { useState, useEffect } from "react";
import { Line, Pie } from "react-chartjs-2";
import './AnalyticsDashboard.css';
import { useFeedData } from "../Contexts/FeedDataContext";

const AnalyticsDashboard = ({ logs }) => {
    const { feedData } = useFeedData();
    const [dateRange, setDateRange] = useState("last7days");
    const [customDate, setCustomDate] = useState({ start: "", end: "" });
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const now = new Date();
        let filtered = feedData;

        if (dateRange === "last7days") {
            const last7Days = new Date();
            last7Days.setDate(now.getDate() - 7);
            filtered = feedData.filter(entry => new Date(entry.date) >= last7Days);
        } else if (dateRange === "last30days") {
            const last30Days = new Date();
            last30Days.setDate(now.getDate() - 30);
            filtered = feedData.filter(entry => new Date(entry.date) >= last30Days);
        } else if (dateRange === "custom") {
            const { start, end } = customDate;
            if (start && end) {
                filtered = feedData.filter(entry =>
                    new Date(entry.date) >= new Date(start) &&
                    new Date(entry.date) <= new Date(end)
                );
            }
        }

        setFilteredData(filtered);
    }, [feedData, dateRange, customDate]);

    const lineChartData = {
        labels: filteredData.map(entry => entry.date),
        datasets: [
            {
                label: "Amount (Oz)",
                data: filteredData.map(entry => entry.amount),
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
            setCustomDate({ start: "", end: "" });
        }  
    };

    return (
        <div className="analytics-dashboard">
            <h1>Analytics Dashboard</h1>

            <div className="date-filters">
                <button
                    className={`filter-button ${dateRange === "last7days" ? "active" : ""}`}
                    onClick={() => handleDateRangeChange("last7days")}
                >
                    Last 7 Days
                </button>
                <button
                    className={`filter-button ${dateRange === "last30days" ? "active" : ""}`}
                    onClick={() => handleDateRangeChange("last30days")}
                >
                    Last 30 Days
                </button>
                <button
                    className={`filter-button ${dateRange === "custom" ? "active" : ""}`}
                    onClick={() => handleDateRangeChange("custom")}
                >
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

            <div className="chart-container">
                <div className="chart">
                    <h2>Session Breakdown</h2>
                    <Line data={lineChartData} />
                </div>
                <div className="chart">
                    <h2>Session Breakdown</h2>
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