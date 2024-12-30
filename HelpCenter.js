import React, { useState } from "react";
import './HelpCenter.css';
import { useTheme } from "../utils/ThemeContext";
import SearchBar from "./SearchBar";

const HelpCenter = () => {
    const { isDarkMode } = useTheme();
    const [activeCategory, setActiveCategory] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const faqs = [
        {
            category: "General",
            questions: [
                { q: "What is this app for?", a: "This app helps you track and manage feeding, pumping, and baby care routines." },
                { q: "How to get started?", a: "Create an account, set up your profile, and start logging entries!" },
                { q: "Is this app free to use?", a: "Yes, the core features are free. However, premium features may require a subscription." },
                { q: "Can I use this app offline?", a: "The app requires an interne connection for syncing, but you can log entries offline and sync them later." },
                { q: "What platforms does the app support?", a: "The app is available on iOS, Android, and web browsers." }
            ],
        },
        {
            category: "Tracking Features",
            questions: [
                { q: "How do I log feeding sessions?", a: "Go to the 'Feeding Tracker' page and fill in the form with the details of your feeding session." },
                { q: "Can I track pumping sessions?", a: "Yes! Use the Pumping Tracker in the Log Entry section." },
                { q: "How do I edit a previous entry?", a: "Navigate to the entry in your log and click the 'Edit' button to update the details." },
                { q: "Can I track more than one baby?", a: "Yes! You can add multiple profiles for each baby in your family." },
                { q: "Can I export my data?", a: "Yes, go to Settings and use the 'Export Data' feature to download your logs." }
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

    const filteredFaqs = faqs
        .map((category) => ({
            ...category,
            questions: category.questions.filter(
                (item) =>
                    item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.a.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        }))
        .filter((category) => category.questions.length > 0);

    if (activeCategory !== null && activeCategory >= filteredFaqs.length) {
        setActiveCategory(null);
    }

    return (
        <div className={`help-center ${isDarkMode ? "dark" : "light"}`}>
            <h1>Help Center</h1>
            <SearchBar 
                searchTerm={searchTerm} 
                setSearchTerm={setSearchTerm} 
                placeholder="Search FAQs..." 
            />
            {filteredFaqs.length === 0 ? (
                <p className="no-results">No results found. Try another search term.</p>
            ) : (
                <>
                    <div className="faq-categories">
                        {filteredFaqs.map((faq, index) => (
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
                                <h2>{filteredFaqs[activeCategory].category}</h2>
                                <ul>
                                    {filteredFaqs[activeCategory].questions.map((item, idx) => (
                                        <li key={idx}>
                                            <strong>{item.q}</strong>
                                            <p>{item.a}</p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default HelpCenter;