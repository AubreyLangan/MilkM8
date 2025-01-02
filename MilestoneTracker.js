import React, { useState } from "react";

const MilestoneTracker = () => {
    const [milestones, setMilestones] = useState([]);
    const [newMilestone, setNewMilestone] = useState({ title: "", description: "", date: "", tag: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMilestone({ ...newMilestone, [name]: value });
    };

    const addMilestone = () => {
        if (!newMilestone.title || !newMilestone.date) {
            alert("Title and date are required!");
            return;
        }
        setMilestones([...milestones, { ...newMilestone, id: Date.now() }]);
        setNewMilestone({ title: "", description: "", date: "", tag: "" });
    };

    const deleteMilestone = (id) => {
        setMilestones(milestones.filter((milestone) => milestone.id !== id));
    };

    return (
        <div className="milestone-tracker">
            
        </div>
    )
}