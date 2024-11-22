import React, { useState } from "react";
import LogEntryForm from "./Components/LogEntryForm";
import LogEntryList from "./Components/LogEntryList";
import StatsSummary from "./Components/StatsSummary";
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [deletedEntry, setDeletedEntry] = useState(null);

  const addEntry = (newEntry) => setEntries([newEntry, ...entries]);

  const deleteEntry = (id) => {
    const entryToDelete = entries.find((entry) => entry.id === id);
    if (window.confirm("Are you sure you want to delete this entry?")) {
      setDeletedEntry(entryToDelete);
      setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
    }
  };

  const undoDelete = () => {
    if (deletedEntry) {
      setEntries((prevEntries) => [...prevEntries, deleteEntry]);
      setDeletedEntry(null);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>MilkMate</h1>
        <p>Your personal breastmilk tracking companion</p>
      </header>
      <LogEntryForm addEntry={addEntry} />
      <StatsSummary entries={entries} />
      <LogEntryList entries={entries} deleteEntry={deleteEntry}/>
      {deletedEntry && (
        <button 
          onClick={undoDelete} 
          style={{ 
            marginTop: '10px', 
            background: 'green', 
            color: 'white', 
            padding: '10px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer', 
          }}
        >
          Undo Last Delete
        </button>
      )}
    </div>
  );
}

export default App;
