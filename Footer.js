import React from "react";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="app-footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} MilkM8. All rights reserved. </p>
                <nav className="footer-nav">
                    <a href="/privacy-policy">Privacy Policy</a>
                    <a href="/terms-of-service">Terms of Service</a>
                    <a href="/contact-page">Contact Us</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;