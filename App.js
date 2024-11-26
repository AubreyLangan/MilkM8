import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import LogEntry from './Pages/LogEntry';
import Stats from './Pages/Stats';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  }

  return (
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/log-entry" element={<LogEntry addEntry={addEntry} entries={entries} deleteEntry={deleteEntry}/>} />
            <Route path="/stats" element={<Stats entries={entries} />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
