import React, { useState } from "react";
import "./FeedbackForm.css";

const FeedbackForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedbackType, setFeedbackType] = useState("Bug Report");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!message) {
            alert("Please provide your feedback before submitting.");
            return;
        }
        const feedbackData = {
            name,
            email,
            feedbackType,
            message,
            date: new Date().toISOString(),
        };
        console.log("Feedback submitted:", feedbackData);

        setSubmitted(true);
    };

    return (
        <div className="feedback-form-container">
            <h1>Feedback Form</h1>
            {submitted ? (
                <div className="thank-you-message">
                    <h2>Thank You!</h2>
                    <p>Your feedback has been received. We appreciate your input!</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="feedback-form">
                    <label>
                        Name (Optional):
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    </label>
                    <label>
                        Email (Optional):
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="enter your email"
                        />
                    </label>
                    <label>
                        Type of Feedback:
                        <select
                            value={feedbackType}
                            onChange={(e) => setFeedbackType(e.target.value)}
                        >
                            <option value="Bug Report">Bug Report</option>
                            <option value="Feature Request">Feature Request</option>
                            <option value="General Feedback">General Feedback</option>
                        </select>
                    </label>
                    <label>
                        Message:
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Enter your feedback here..."
                            rows="5"
                        ></textarea>
                    </label>
                    <button type="submit">Submit Feedback</button>
                </form>
            )}
        </div>
    );
};

export default FeedbackForm;