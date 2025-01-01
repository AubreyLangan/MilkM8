import React from "react";
import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>About</h3>
                    <p>This app helps you track feeding, pumping, and more to simplify baby care routines.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/help-center">Help Center</Link></li>
                        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service">Terms of Service</Link></li>
                        <li><Link to="/feedback-form">Feedback</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email:</p>
                    <div className="social-media">
                        
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MilkM8. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;