import React, { useState } from 'react';

const LogEntryForm = ({ addEntry }) => {
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('oz');
    const [notes, setNotes] = useState('');

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'oz' ? 'mL' : 'oz'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEntry({
            id: Date.now(),
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            quantity,
            unit,
            notes
        });
        setQuantity('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Quantity ({unit}):
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={`Enter quantity in ${unit}`}
                        required
                    />
                </label>
            </div>
            <div>
                <button type='button' onClick={toggleUnit}>
                    Switch to {unit === 'oz' ? 'mL' : 'oz'}
                </button>
            </div>
            <div>
                <label>
                    Notes:
                    <input
                        type='text'
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder='Notes (optional)'
                    />
                </label>
            </div>
            <button type='submit'>Add Entry</button>
        </form>
    );
};

export default LogEntryForm;