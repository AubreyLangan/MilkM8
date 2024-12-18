import React from "react";
import './Resources.css';
import { useTheme } from "../utils/ThemeContext";

const Resources = () => {
    const { isDarkMode } = useTheme();
    const resources = [
        { title: "La Leche League International", url: "https://www.llli.org/", description: "A global nonprofit dedicated to providing breastfeeding support and resources." },
        { title: "KellyMom", url: "https://kellymom.com/", description: "Evidence-based information on breastfeeding and parenting." },
        { title: "CDC Breastfeeding Resources", url: "https://www.cdc.gov/breastfeeding/index.htm", description: "Official breastfeeding guidance and information from the CDC." },
        { title: "Pumping Hacks and Tips", url: "https://www.pumpinghacks.com/", description: "Advice and hacks for maximizing pumping efficiency." },
    ];

return (
    <div className={`resources ${isDarkMode ? "dark" : "light"}`}>
        <h1>Breastfeeding and Pumping Resources</h1>
        <p>Here are some trusted resources to help you on your breastfeeding and pumping journey:</p>
        <ul>
            {resources.map((resource, index) => (
                <li key={index} className="resource-item">
                    <a href="resource.url" target="_blank" rel="noopener noreferrer">
                        {resource.title}
                    </a>
                    <p>{resource.description}</p>
                </li>
            ))}
        </ul>
    </div>
);
};

export default Resources;