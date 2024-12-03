import React, { useState } from "react";
import { breastfeedingTips } from "../Data/Tips";

const TipsGenerator = () => {
    const [currentTip, setCurrentTip] = useState("");

    const generateTip = () => {
        const randomeIndex = Math.floor(Math.random() * breastfeedingTips.length);
        setCurrentTip(breastfeedingTips[randomeIndex]);
    };

    return (
        <div className="tips-generator">
            <h2>Breastfeeding Tips</h2>
            <p>{currentTip || "Click below to get a tip!"}</p>
            <button onClick={generateTip}>Generate Tip</button>
        </div>
    );
};

export default TipsGenerator;