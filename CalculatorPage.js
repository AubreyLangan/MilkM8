import React from "react";
import MilkStashCalculator from "../Components/Calculators/Calculator";
import DepletionCalculator from "../Components/Calculators/DepletionCalculator";
import TargetGoalCalculator from "../Components/Calculators/TargetGoalCalculator";
import EventMilkCalculator from "../Components/Calculators/EventMilkCalculator";

const CalculatorPage = () => {
    return (
        <div className="calculator-page">
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
        </div>
    );
};

export default CalculatorPage;