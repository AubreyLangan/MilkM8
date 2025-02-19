import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const FeedingPatternGenerator = () => {
    const [interval, setInterval] = useState(3);
    const [feedings, setFeedings] = useState(generateFeedingData(3));

    function generateFeedingData(interval) {
        const data = [];
        let currentTime = 0;
        for (let i = 0; i < 8; i++) {
            data.push({ time: `${currentTime}:00`, feed:1 });
            currentTime += interval;
            if (currentTime >= 24) break;
        }
        return data;
    }

    const handleIntervalChange = (e) => {
        const newInterval = parseInt(e.target.value, 10);
        setInterval(newInterval);
        setFeedings(generateFeedingData(newInterval));
    };

    return (
        <div className="feeding-pattern-container">
            <h1>Feeding Pattern Generator</h1>
            <label>
                Set Feeding interval (hours):
                <input
                    type="number"
                    min="1"
                    max="12"
                    value={interval}
                    onChange={handleIntervalChange}
                />
            </label>
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