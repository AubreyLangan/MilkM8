import React, { useState } from "react";
import LogEntryForm from "./Components/LogEntryForm";
import LogEntryList from "./Components/LogEntryList";
import StatsSummary from "./Components/StatsSummary";
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);

  const addEntry = (newEntry) => setEntries([newEntry, ...entries]);

  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  }
  return (
    <div className="container">
      <header>
        <h1>MilkMate</h1>
        <p>Your personal breastmilk tracking companion</p>
      </header>
      <LogEntryForm addEntry={addEntry} />
      <StatsSummary entries={entries} />
      <LogEntryList entries={entries} deleteEntry={deleteEntry}/>
    </div>
  );
}

export default App;
