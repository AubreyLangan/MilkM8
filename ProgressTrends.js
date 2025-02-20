import React, { useState, useEffect } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import "./ProgressTrends.css";

const ProgressTrends = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([
            { date: "01/01", feeds: 8, pumps: 5, milestones: 1 },
            { date: "01/02", feeds: 7, pumps: 4, milestones: 0 },
        ]);
    }, []);

    return (
        <div className="progress-trends-container">
            <h1>Progress and Trends</h1>
            <div className="chart-container">
                <h2>Feeding & Pumping Trends</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="feeds" stroke="#6c63ff" strokeWidth={2} />
                        <Line type="monotone" dataKey="pumps" stroke="#A89CFF" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-container">
                <h2>Milestone Achievements</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="milestone" fill="#0288d1" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ProgressTrends;