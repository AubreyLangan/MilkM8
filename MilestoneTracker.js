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
            <h1>Milestone Tracker</h1>
            <div className="add-milestone">
                <input
                    type="text"
                    name="title"
                    value={newMilestone.title}
                    onChange={handleInputChange}
                    placeholder="Milestone Title"
                />
                <textarea
                    name="description"
                    value={newMilestone.description}
                    onChange={handleInputChange}
                    placeholder="Description (optional)"
                />
                <input
                    type="date"
                    name="date"
                    value={newMilestone.date}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="tag"
                    value={newMilestone.tag}
                    onChange={handleInputChange}
                    placeholder="Tag (optional)"
                />
                <button onClick={addMilestone}>Add Milestone</button>
            </div>

            <div className="milestone-list">
                {milestones.length === 0 ? (
                    <p>No milestones yet. Start by adding one!</p>
                ) : (
                    milestones.map((milestone) => (
                        <div key={milestone.id} className="milestone">
                            <h3>{milestone.title}</h3>
                            <p>{milestone.description}</p>
                            <p>
                                <strong>Date:</strong> {milestone.date}
                            </p>
                            {milestone.tag && <p><strong>Tag:</strong> {milestone.tag} </p>}
                            <button onClick={() => deleteMilestone(milestone.id)}>Delete</button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default MilestoneTracker;