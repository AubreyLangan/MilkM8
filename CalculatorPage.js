import React from "react";
import MilkStashCalculator from "../Components/Calculators/Calculator";
import DepletionCalculator from "../Components/Calculators/DepletionCalculator";
import TargetGoalCalculator from "../Components/Calculators/TargetGoalCalculator";
import EventMilkCalculator from "../Components/Calculators/EventMilkCalculator";
import AverageProductionCalculator from "../Components/Calculators/AverageProductionCalculator";
import "./CalculatorPage.css";
import { useTheme } from "../utils/ThemeContext";

const CalculatorPage = () => {
    const { isDarkMode } = useTheme();
    return (
        <div className={`calculator-page ${isDarkMode ? "dark" : "light"}`}>
            <h1>Milk Calculators</h1>
            <div className="calculator-section">
                <h2>Days until Depletion</h2>
                <DepletionCalculator />
            </div>
            <div className="calculator-section">
                <h2>Target Goal Calculator</h2>
                <TargetGoalCalculator />
            </div>
            <div className="calculator-section">
                <h2>Milk Stash Calculator</h2>
                <MilkStashCalculator />
            </div>
            <div className="calculator-section">
                <h2>Event Milk Calculator</h2>
                <EventMilkCalculator />
            </div>
            <div className="calculator-section">
                <h2>Average Production Calculator</h2>
                <AverageProductionCalculator />
            </div>
        </div>
    );
};

export default CalculatorPage;