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
            
        </div>
    )
}