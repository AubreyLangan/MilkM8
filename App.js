import React, { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import LogEntry from './Pages/LogEntry';
import Stats from './Pages/Stats';
import LogEntries from "./Components/LogEntries";
import Resources from "./Components/Resources";
import MilkStashCalculator from "./Components/Calculator";
import './App.css';

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark-theme", newTheme === "dark");
  };

  useEffect(() => {
    const preferredTheme = window.matchMedia("prefers-color-scheme: dark").matches ? "dark" : "light";
    setTheme(preferredTheme);
    document.documentElement.classList.toggle("dark-theme", preferredTheme === "dark");
  }, []);


  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => {
    setEntries((prevEntries) => [...prevEntries, entry]);
  };

  const deleteEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  }
  
  const updateEntry = (updatedEntry) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  }; 

  return (
      <div className={`app ${theme}`}>
        <Navbar  toggleTheme={toggleTheme} theme={theme} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home entries={entries} />} />
            <Route path="/log-entry" element={<LogEntry addEntry={addEntry} entries={entries} deleteEntry={deleteEntry} updateEntry={updateEntry} />} />
            <Route path="/stats" element={<Stats entries={entries} />} />
            <Route path="log-entries" element={<LogEntries entries={entries} updateEntry={updateEntry}  setEntries={setEntries} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calculator" element={<MilkStashCalculator />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
