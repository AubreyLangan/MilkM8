import React, { useState } from 'react';

const LogEntryForm = ({ addEntry }) => {
    const [quantity, setQuantity] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry({
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            quantity,
            notes
        });
        setQuantity('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type='number'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder='Quantity (oz/ml)'
            required
            />
            <input
            type='text'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder='Notes (optional)'
            />
            <button type='submit'>Add Entry</button>
        </form>
    );
};

export default LogEntryForm;