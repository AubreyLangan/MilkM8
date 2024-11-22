import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import LogEntry from './Pages/LogEntry';
import Stats from './Pages/Stats';
import './App.css';

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/log-entry">Log Entry</Link></li>
          <li><Link to="/stats">Stats</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/log-entry" element={<LogEntry addEntry={addEntry} />} />
        <Route path="/stats" element={<Stats entries={entries} />} />
      </Routes>
    </div>
  );
};

export default App;
