import React, { useEffect, useState } from "react";
import _ from "lodash";
import './ClockTimer.css';

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
        } 
        return () => clearInterval(timer);
    }, [isRunning]);

    const getClockHandStyle = (unit, divisor) => {
        const rotation = (time % divisor) * (360 / divisor);
        return { transform: `rotate(${rotation}deg)` };
    };

    const formatTime = (time) => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${String(hours).padStart(2, "0")}: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className="clock-timer">
            <div className="clock">
                <div className="clock-numbers">
                    {[...Array(12)].map((_, i) => (
                        <div
                            key={i}
                            className="clock-number"
                            style={{
                                transform: `rotate(${i * 30}deg) translate(0, -130px) rotate(${-i * 30}deg)`
                            }}
                        >
                            {i === 0 ? 12 : i}
                        </div>
                    ))}
                </div>
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
            <p>Time Elapsed: {formatTime(time)}</p>
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