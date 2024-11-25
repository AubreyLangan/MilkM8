import React, { useState } from 'react';

const LogEntryForm = ({ onSubmit }) => {
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('oz');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState('');

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === 'oz' ? 'mL' : 'oz'));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const parsedQuantity = parseFloat(quantity);
        if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
            setError("Please enter a valid quantity greater than 0.");
            return;
        }

        setError("");
       onSubmit({
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        quantity: parsedQuantity,
        unit,
        notes: notes.trim(),
       });

       setSuccessMessage("Pump session logged successfully!")

       setTimeout(() => setSuccessMessage(''), 3000);

        setQuantity('');
        setNotes('');
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {successMessage && <div className='success-message'>{successMessage}</div>}
            <div>
                <label>
                    Quantity ({unit}):
                    <input
                        type='number'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder={`Enter quantity in ${unit}`}
                        min={0}
                        step="0.01"
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