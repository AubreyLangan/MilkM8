import React, { useState } from "react";
import { breastfeedingTips } from "../Data/Tips";
import { useNavigate } from "react-router-dom";

const TipsGenerator = () => {
    const [currentTip, setCurrentTip] = useState("");
    const navigate = useNavigate();

    const generateTip = () => {
        const randomeIndex = Math.floor(Math.random() * breastfeedingTips.length);
        setCurrentTip(breastfeedingTips[randomeIndex]);
    };

    const goToResources = () => {
        navigate("/resources")
    }

    return (
        <div className="tips-generator">
            <h2>Breastfeeding Tips</h2>
            <p>{currentTip || "Click below to get a tip!"}</p>
            <button onClick={generateTip}>Generate Tip</button>
            <button onClick={goToResources} className="resource-button">
                Go to Resources
            </button>
        </div>
    );
};

export default TipsGenerator;