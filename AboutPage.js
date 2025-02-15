import React from "react";
import { Link } from "react-router-dom";
import './AboutPage.css';

const AboutPage = () => {
    return (
        <div className="about-page">
            <header className="about-header">
                <h1>About Our App</h1>
                <p>Your trusted companion for feeding and baby care tracking.</p>
            </header>

            <section className="about-features">
                <h2>Key Features</h2>
                <div className="features-grid">
                    <div className="feature">
                        <h3>
                            <Link to="/feed-tracker">Feeding Tracker</Link>
                        </h3>
                        <p>Easily log and track feeding sessions.</p>
                    </div>
                    <div className="feature">
                        <h3>
                            <Link to="/log-entry">Pumping Tracker</Link>
                        </h3>
                        <p>Record pumping sessions and manage supply.</p>
                    </div>
                    <div className="feature">
                        <h3>
                            <Link to="/calculators">Calculators</Link>
                        </h3>
                        <p>A variety of breastmilk related calculators to make your life easier.</p>
                    </div>
                    <div className="feature">
                        <h3>
                            <Link to="/help-center">Help Center</Link>
                        </h3>
                        <p>Get answers to your questions in our FAQ section.</p>
                    </div>
                </div>
            </section>

            <section className="about-story">
                <h2>Our Story</h2>
                <p>
                    This app was born out of a desire to make feeding and baby care easier for parents everywhere.
                    As a parent myself, I know how challenging it can be to juggle it all. 
                    I hope this app helps you focus on what matters most - your baby.
                </p>
            </section>
            <section className="about-team">
                <h2>Meet the Team</h2>
                <div className="team-grid">
                    <div className="team-member">
                        <h3>Aubrey Langan</h3>
                        <p>Founder & Developer</p>
                    </div>
                </div>
            </section>

            <footer className="about-footer">
                <h2>Join Us!</h2>
                <p>Take control of your baby care journey.</p>
                <Link to="/sign-up" className="signip-link">Sign Up Here</Link>
            </footer>
        </div>
    );
};

export default AboutPage;