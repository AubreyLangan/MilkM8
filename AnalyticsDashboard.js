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

    const groupedData = filteredData.reduce((acc, entry) => {
        const date = new Date(entry.date).toLocaleDateString();
        acc[date] = (acc[date] || 0) + entry.amount;
        return acc;
    }, {});

    const sessionsByType = filteredData.reduce(
        (acc, entry) => {
            acc[entry.type] = (acc[entry.type] || 0) + entry.amount;
            return acc;
        },
        { Breastfeeding: 0, Pumping: 0, Formula: 0 }
    );

    const lineChartData = {
        labels: Object.keys(groupedData),
        datasets: [
            {
                label: "Amount (Oz)",
                data: Object.values(groupedData),
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                fill: true,
            },
        ],
    };

    const pieChartData = {
        labels: Object.keys(sessionsByType),
        datasets: [
            {
                data: Object.values(sessionsByType),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    const totalAmount = filteredData.reduce((sum, entry) => sum + parseFloat(entry.amount || 0), 0);
    const mostActiveDay = filteredData.reduce((days, entry) => {
        const day = new Date(entry.date).toLocaleDateString("en-US", { weekday: "long" });
        days[day] = (days[day] || 0) + 1;
        return days;
    }, {});
    const mostActiveDayName = Object.keys(mostActiveDay).reduce((a, b) => mostActiveDay[a] > mostActiveDay[b] ? a : b, "");

    return (
        <div className="analytics-dashboard">
            <h1>Analytics Dashboard</h1>

            <div className="date-filters">
                <button
                    className={`filter-button ${dateRange === "last7days" ? "active" : ""}`}
                    onClick={() => setDateRange("last7days")}
                >
                    Last 7 Days
                </button>
                <button
                    className={`filter-button ${dateRange === "last30days" ? "active" : ""}`}
                    onClick={() => setDateRange("last30days")}
                >
                    Last 30 Days
                </button>
                <button
                    className={`filter-button ${dateRange === "custom" ? "active" : ""}`}
                    onClick={() => setDateRange("custom")}
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
                    <h2>Total Amount Fed</h2>
                    <p>{totalAmount} Oz</p>
                </div>
                <div className="metric">
                    <h2>Most Active Day</h2>
                    <p>{mostActiveDayName || "N/A"}</p>
                </div>
            </div>

            <div className="recent-activity">
                <h2>Recent Activity</h2>
                <ul>
                   {filteredData.slice(0, 5).map((entry) => (
                    <li key={entry.id}>
                        {entry.date}: {entry.amount} Oz - {entry.notes || "No notes"}
                     </li>
                   ))}
                </ul>
            </div>
        </div>
    );
};

export default AnalyticsDashboard;