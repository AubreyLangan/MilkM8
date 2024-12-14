import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import LogEntry from './Pages/LogEntry';
import Stats from './Pages/Stats';
import LogEntries from "./Components/LogEntries";
import Resources from "./Components/Resources";
import CalculatorPage from "./Pages/CalculatorPage";
import UserProfile from "./Components/UserProfile";
import './App.css';

const App = () => {
  const [userProfile, setUserProfile] = useState(() => {
    const savedProfile = localStorage.getItem("userProfile");
    return savedProfile ? JSON.parse(savedProfile) : {};
  });
  
  const updateUserProfile = (profile) => {
    setUserProfile(profile);
    localStorage.setItem("userProfile", JSON.stringify(profile));
  };

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
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home entries={entries} />} />
            <Route path="/log-entry" element={<LogEntry addEntry={addEntry} entries={entries} deleteEntry={deleteEntry} updateEntry={updateEntry} />} />
            <Route path="/stats" element={<Stats entries={entries} />} />
            <Route path="log-entries" element={<LogEntries entries={entries} updateEntry={updateEntry}  setEntries={setEntries} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/calculators" element={<CalculatorPage entries={entries}/> } />
            <Route path="/profile" element={<UserProfile updateUser={updateUserProfile} userData={userProfile} />} />
          </Routes>
        </div>
      </div>
  );
};

export default App;
