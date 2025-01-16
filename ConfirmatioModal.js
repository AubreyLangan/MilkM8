import React from "react";

const ConfirmationModal = ({ message, onConfirm, onCancel }) => (
    <div className="modal-overlay">
        <div className="modal">
            <h3>{message}</h3>
            <button onClick={onConfirm}>Yes, Delete</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    </div>
);

export default ConfirmationModal;