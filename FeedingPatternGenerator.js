import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "./FeedingPageGenerator.css";

const FeedingPatternGenerator = () => {
    const [interval, setInterval] = useState(3);
    const [tempInterval, setTempInterval] = useState(3);
    const [feedings, setFeedings] = useState(generateFeedingData(3));

    function generateFeedingData(interval) {
        const data = [];
        let currentTime = 0;
        for (let i = 0; i < 8; i++) {
            data.push({ time: `${currentTime}:00`, feed: 1 })
            currentTime += interval;
            if (currentTime >= 24) break;
        }
        return data;
    }

    const handleGeneratePattern = () => {
        setInterval(tempInterval);
        setFeedings(generateFeedingData(tempInterval));
    };

    const handleReset = () => {
        setTempInterval(3);
        setInterval(3);
        setFeedings(generateFeedingData(3));
    };

    const handleExportCSV = () => {
        const csvContent = [
            ["Time", "Feed"],
            ...feedings.map((row) => [row.time, row.feed])
        ].map((e) => e.join(",")).join("\n");

        const blob = new Blob([csvContent], { type: "text/csv" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "feeding-pattern.csv";
        link.click();
    };

    const handleIntervalChange = (e) => {
        const newInterval = parseInt(e.target.value, 10);
        if (!isNaN(newInterval) && newInterval > 0) {
            setInterval(newInterval);
            setFeedings(generateFeedingData(newInterval));
        }

    };

    return (
        <div className="feeding-pattern-container">
            <h1>Feeding Pattern Generator</h1>
            <label>
                Set Feeding Interval (hours):
                <input
                    type="number"
                    min="1"
                    max="12"
                    step="1"
                    value={interval}
                    onChange={handleIntervalChange}
                />
            </label>
            <div className="button-group">
                <button className="feeding-pattern-btn" onClick={handleGeneratePattern}>
                    Generate Patterns
                </button>
                <button className="feeding-pattern-btn reset" onClick={handleReset}>
                    Reset to Default
                </button>
                <button className="feeding-pattern-btn export" onClick={handleExportCSV}>
                    Export CSV
                </button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={feedings}>
                    <XAxis dataKey="time" />
                    <YAxis domain={[0, 2]} hide />
                    <Tooltip />
                    <Line type="monotone" dataKey="feed" stroke="#6c63ff" strokeWidth={2} dot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FeedingPatternGenerator;