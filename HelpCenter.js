import React, { useState } from "react";


const faqs = [
    {
        category: "General",
        questions: [
            { q: "What is this app for?", a: "This app helps you track and manage feeding, pumping, and baby care routines." },
            { q: "How to get started?", a: "Create an account, set up your profile, and start logging entries!" },
        ],
    },
    {
        category: "Tracking Features",
        questions: [
            { q: "How do I log feeding sessions?", a: "Go to the 'Feeding Tracker' page and fill in the form with the details of your feeding session." },
            { q: "Can I track pumping sessions?", a: "Yes! Use the Pumping Tracker in the Log Entry section." }
        ],
    },
    {
        category: "Technical Help",
        questions: [
            { q: "How do I enable dark mode?", a: "Go to Settings and toggle the Dark Mode Switch." },
            { q: "Why is my data not syncing?", a: "Ensure you are logged in and have an active internet connection." },
        ],
    }
];

const HelpCenter = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <div className="help-center">
            <h1>Help Center</h1>
            <div className="faq-categories">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`category ${activeCategory === index ? "active" : ""}`}
                        onClick={() => setActiveCategory(activeCategory === index ? null : index)}
                    >
                        {faq.category}
                    </div>
                ))}
            </div>
            <div className="faq-content">
                {activeCategory !== null && (
                    <>
                        <h2>{faqs[activeCategory].category}</h2>
                        <ul>
                            {faqs[activeCategory].questions.map((item, idx) => (
                                <li key={idx}>
                                    <strong>{item.q}</strong>
                                    <p>{item.a}</p>
                                </li>
                            ))}  
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default HelpCenter;