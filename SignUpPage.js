import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [agree, setAgree] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!agree) {
            alert("You must agree to the Terms of Service to continue.");
            return;
        }
        console.log("User signed up:", formData);
        navigate("/profile");
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
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

                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label className="tos-checkbox">
                    <input
                        type="checkbox"
                        checked={agree}
                        onChange={() => setAgree(!agree)}
                        required
                    />
                    I agree to the <Link to="/terms-of-service">Terms of Service</Link>
                </label>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUpPage;