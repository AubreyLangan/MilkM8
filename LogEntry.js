import React from "react";
import LogEntryForm from '../Components/LogEntryForm';

const LogEntry = ({ addEntry }) => {
    return (
        <div>
            <h1>Log Your Milk</h1>
            <LogEntryForm onSubmit={addEntry}/>
        </div>
    );
};

export default LogEntry;