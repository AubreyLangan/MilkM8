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
  const [userData, setUserData] = useState(() => {
    try {
      const savedData = localStorage.getItem("userData");
      return savedData ? JSON.parse(savedData) : {
        name: "Jane Doe",
        babyName: "Baby Jane",
        unit: "oz",
        goal: "30",
      };
    } catch (error) {
      console.error("Error parsing user data from localStorage", error);
      return { name: "", babyName: "", unit: "", goal: "" };
    }
  });

  const handleUpdateUser = (updatedProfile) => {
    if (typeof updatedProfile === "object" && updatedProfile !== null) {
      setUserData(updatedProfile);
      localStorage.setItem("userData", JSON.stringify(updatedProfile));
    } else {
      console.error("Invalid user profile update:", updatedProfile);
    }
  };

  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("entries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  const [setLoading] = useState(false);

  const addEntry =  async (entry) => {
    setLoading(true);
    try {
      const newEntries = [...entries, entry];
      setEntries(newEntries);
      localStorage.setItem("entries", JSON.stringify(newEntries));
    } catch (error) {
      console.error("Error adding entry:", error);
    } finally {
      setLoading(false);
    }
    const newEntries = [...entries, entry];
    setEntries(newEntries);
    localStorage.setItem("entries", JSON.stringify(newEntries));
  };

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((entry) => entry.id !== id);
    setEntries(filteredEntries);
    localStorage.setItem("entries", JSON.stringify(filteredEntries));
  };

  const updateEntry = (updatedEntry) => {
    const updatedEntries = entries.map((entry) =>
    entry.id === updatedEntry.id ? updatedEntry : entry
  );
  setEntries(updatedEntries);
  localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home entries={entries} />} />
          <Route
            path="/log-entry"
            element={
              <LogEntry
                addEntry={addEntry}
                entries={entries}
                deleteEntry={deleteEntry}
                updateEntry={updateEntry}
              />
            }
          />
          <Route path="/stats" element={<Stats entries={entries} />} />
          <Route 
            path="/log-entries"
            element={
              <LogEntries
                entries={entries}
                updateEntry={updateEntry}
                setEntries={setEntries}
              />
            }
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/calculators" element={<CalculatorPage entries={entries}/>} />
          <Route 
            path="/profile"
            element={
              <UserProfile
                updatedUser={handleUpdateUser}
                userData={userData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
