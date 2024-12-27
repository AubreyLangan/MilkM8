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

        ]
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
                            
                        </ul>
                    </>
                )}
            </div>
        </div>
    )
}