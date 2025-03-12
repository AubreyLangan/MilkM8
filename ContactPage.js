import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message sent:", formData);
        setSubmitted(true);
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out!</p>

            {submitted ? (
                <p className="success-message">Thank you for the message! We'll get back to you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label>Message:</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                </form>
            )}

            <div className="contact-info">
                <h3>Other ways to reach us</h3>
                <p>Email:</p>
                <p>Follow us on social media:</p>
            </div>
        </div>
    );
};

export default ContactPage;