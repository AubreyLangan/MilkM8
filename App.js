import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from './Pages/Home';
import AboutPage from "./Pages/AboutPage";
import LogEntry from './Pages/LogEntry';
import Stats from './Pages/Stats';
import LogEntries from "./Components/LogEntries";
import Resources from "./Components/Resources";
import CalculatorPage from "./Pages/CalculatorPage";
import UserProfile from "./Components/UserProfile";
import { ThemeProvider, useTheme } from "./utils/ThemeContext";
import { getFromLocalStorage, saveToLocalStorage } from "./utils/localStorage";
import FeedTracker from "./Components/FeedTracker";
import './App.css';
import HelpCenter from "./Components/HelpCenter";
import Footer from "./Components/Footer";
import SettingsPage from "./Pages/SettingsPage";
import MilestoneTracker from "./Components/MilestoneTracker";
import AnalyticsDashboard from "./Components/AnalyticsDashboard";
import { FeedDataProvider } from "./Contexts/FeedDataContext";
import ReminderPage from "./Pages/ReminderPage";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
} from "chart.js";
import FeedbackForm from "./Components/FeedbackForm";
import { ReminderProvider } from "./Contexts/ReminderContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);



const App = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [userData, setUserData] = useState(() =>
  getFromLocalStorage("userData", {
    name: "Jane Doe",
    babyName: "Baby Jane",
    unit: "Oz",
    goal: "30",
  })
);

const [entries, setEntries] = useState(() =>
  getFromLocalStorage("entries", [])
);

const [loading, setLoading] = useState(false);

const handleUpdateUser = (updatedProfile) => {
  if (typeof updatedProfile === "object" && updatedProfile !== null) {
    setUserData(updatedProfile);
    saveToLocalStorage("userData", updatedProfile);
  } else {
    console.error("Invalid user profile update:", updatedProfile);
  }
};

const addEntry = async (entry) => {
  setLoading(true);
  try {
    const newEntries = [...entries, entry];
    setEntries(newEntries);
    saveToLocalStorage("entries", newEntries);
  } catch (error) {
    console.error("Error adding entry:", error);
  } finally {
    setLoading(false);
  }
};

const deleteEntry = (id) => {
  const filteredEntries = entries.filter((entry) => entry.id !== id);
  setEntries(filteredEntries);
  saveToLocalStorage("entries", filteredEntries);
};

const updateEntry = (updatedEntry) => {
  const updatedEntries = entries.map((entry) =>
    entry.id === updatedEntry.id ? updatedEntry : entry
  );
  setEntries(updatedEntries);
  saveToLocalStorage("entries", updatedEntries);
};

return (
  <ThemeProvider>
    <ReminderProvider>
      <FeedDataProvider>
        <div className={`app ${isDarkMode ? "Dark" : "Light"}`}>
          <header>
            <button onClick={toggleTheme}>
              Switch to {isDarkMode ? "Light" : "Dark"}
            </button>
          </header>
          <Navbar />
          {loading && <div className="loading-spinner">Loading...
        </div>}
          <div className="content">
            <Routes>
              <Route path="/" element={<Home entries={entries} />} />
              <Route path="/about-page" element={<AboutPage />} />
              <Route path="/analytics-dashboard" element={<AnalyticsDashboard />} />
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
              <Route path="/milestone-tracker" element={<MilestoneTracker />} />
              <Route path="/resources" element={<Resources />} />
              <Route
                path="/calculators"
                element={<CalculatorPage entries={entries}/> } 
              />
              <Route
                path="/profile"
                element={
                  <UserProfile
                  updatedUser={handleUpdateUser}
                  userData={userData}
                />
                }
              />
              <Route
                path="feed-tracker"
                element={
                  <FeedTracker 
                    entries={entries}
                    addEntry={(entry) => {
                      const updatedEntries = [...entries, entry];
                      setEntries(updatedEntries);
                      localStorage.setItem("entries", JSON.stringify(updatedEntries));
                    }}
                  />
                }
              />
              <Route path="/settings-page" element={<SettingsPage />} />
              <Route
                path="/help-center"
                element={<HelpCenter />}
              />
              <Route path="/feedback-form" element={<FeedbackForm />} />
              <Route path="/reminders" element={<ReminderPage />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </FeedDataProvider>
    </ReminderProvider>
  </ThemeProvider>
);
};

export default App;
