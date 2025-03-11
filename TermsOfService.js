import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
    return (
        <div className="terms-container">
            <h1>Terms of Service</h1>
            <p>Last Updated: 10 March 2025</p>

            <h2>1. Introduction</h2>
            <p>Welcome to MilkM8! By using our app, you agree to the following terms and conditions.</p>

            <h2>2. User Responsibilities</h2>
            <p>You agree to use the app responsibly and follow all applicable laws.</p>

            <h2>3. Data Privacy</h2>
            <p>We collect and store user data as outlined in our <Link to="/privacy-policy">Privacy Policy</Link>.</p>

            <h2>4. Termination</h2>
            <p>We reserve the right to suspend or terminate your account if you violate our terms of service.</p>

            <h2>5. Change to Terms</h2>
            <p>We may update these terms from time to time. COntinued use of the app signifies acceptance of the updated terms.</p>

            <h2>6. Contact Us</h2>
            <p>If you have any questions, contact us at </p>
        </div>
    );
};

export default TermsOfService;