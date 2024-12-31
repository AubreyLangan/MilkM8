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
                { q: "What do I do if I forgot my password?", a: "Use the 'Forgot Password' link on the login page to reset your password." },
                { q: "How do I update the app?", a: "Visit your app store and check for updates." },
                { q: "Why am I getting notifications at the wrong time?", a: "Check your device's timezone and notification settings to ensure they're configured correctly." }
            ]
        },
        {
            category: "Account Management",
            questions: [
                { q: "How do I delete my account?", a: "Go to Settings > Account Management and select 'Delete Account.' Not that this action is irreversible." },
                { q: "Can I share my account with my partner?", a: "Yes, you can invite other caregivers to view and manage logs by sharing access through the app." }
            ]
        },
        {
            category: "Data and Privacy",
            questions: [
                { q: "Is my data secure?", a: "We use end-to-end encryption and follow industry standards to protect your data." },
                { q: "How is my data used?", a: "Your data is only used to improve your experience within the app and is never shared without your consent." },
                { q: "Can I back up my data?", a: "Yes, your data is automatically backed up to the cloud when you're online." }
            ]
        },
        {
            category: "Customization",
            questions: [
                { q: "Can I change the theme of the app?", a: "Yes, you can toggle between light and dark mode in the Settings." },
                { q: "How do I personalize my baby's profile?", a: "Go to the baby's profile settings and add a photo, birthdate and other details." },
            ]
        },
        {
            category: "Miscellaneous",
            questions: [
                { q: "Can I set reminders?", a: "Yes, you can set custom reminders for feeding, pumping or other activities in the Reminders section." },
                { q: "What if I encounter a bug?", a: "Please contact our support team using the 'Report a Bug' option in Settings." },
                { q: "How do I suggest a feature?", a: "We'd love to hear from you! Use the 'Feedback' option in the app or email us directly." }
            ]
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