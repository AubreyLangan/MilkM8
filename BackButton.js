import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <button 
            onClick={() => navigate(-1)}
            style={{
                backgroundColor: "#0288d1",
                color: "#ffffff",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1em",
                margin: "10px",
            }}
        >
            ⬅ Back
        </button>
    );
};

export default BackButton;