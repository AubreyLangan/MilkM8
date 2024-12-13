import React, { useState } from "react";

const EventMilkCalculator = () => {
    const [eventDuration, setEventDuration] = useState("");
    const [feedingFrequency, setFeedingFrequency] = useState("");
    const [milkPerFeed, setMilkPerFeed] = useState("");
    const [result, setResult] = useState(null);

    const CalculateMilkForEvent = () => {
        if (!eventDuration || !feedingFrequency || !milkPerFeed) {
            alert("Please fill in all fields.");
            return;
        }
        const feeds = Math.ceil(eventDuration / feedingFrequency);
        const totalMilk = (feeds * milkPerFeed).toFixed(1);
        setResult(totalMilk);
    };

    return (
        <div>
            <h2>Event Milk Calculator</h2>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    CalculateMilkForEvent();
                }}
            >
                <label>
                    Event Duration (hours):
                    <input 
                        type="number"
                        value={eventDuration}
                        onChange={(e) => setEventDuration(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Feeding Frequency (hours):
                    <input 
                        type="number"
                        value={feedingFrequency}
                        onChange={(e) => setFeedingFrequency(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Milk per Feed (oz or ml):
                    <input
                        type="number"
                        value={milkPerFeed}
                        onChange={(e) => setMilkPerFeed(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Calculate</button>
            </form>
            {result !== null && (
                <p>You will need approximately <strong>{result}</strong> oz/ml of milk for the event.</p>
            )}
        </div>
    );
};

export default EventMilkCalculator;