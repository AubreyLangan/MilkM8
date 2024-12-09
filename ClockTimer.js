import React, { useEffect, useState } from "react";

const ClockTimer = ({ onSubmit }) => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTime(0);
    };

    const saveSession = () => {
        if (onSubmit) {
            onSubmit({ time });
        }
        resetTimer();
    };

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const getClockHandStyle = (unit, divisor) => {
        const rotation = (time % divisor) * (360 / divisor);
        return { transform: `rotate(${rotation}deg)` };
    };

    return (
        <div className="clock-timer">
            <div className="clock">
                <div
                    className="hand hour-hand"
                    style={getClockHandStyle(3600, 43200)}
                ></div>
                <div
                    className="hand minute-hand"
                    style={getClockHandStyle(60, 3600)}
                ></div>
                <div 
                    className="hand second-hand"
                    style={getClockHandStyle(1, 60)}
                ></div>
                <div className="center-dot"></div>
            </div>
            <div className="timer-controls">
                <button onClick={toggleTimer}>
                    {isRunning ? "Pause" : "Start"}
                </button>
                <button onClick={resetTimer} disabled={time === 0}>
                    Reset
                </button>
                <button onClick={saveSession} disabled={time === 0}>
                    Save Session
                </button>
            </div>
        </div>
    );
};

export default ClockTimer;