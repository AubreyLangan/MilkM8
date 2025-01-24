import React, { createContext, useState, useContext } from "react";

const FeedDataContext = createContext();

export const useFeedData = () => useContext(FeedDataContext);

export const FeedDataProvider = ({ children }) => {
    const [feedData, setFeedData] = useState([]);

    const addFeedData = (entry) => {
        setFeedData((prevData) => [...prevData, entry]);
    };

    const updateFeedData = (updatedEntry) => {
        setFeedData((prev) =>
        prev.map((entry) => (entry.id === updatedEntry.id ? updatedEntry : entry))
        );
    };

    const deleteFeedData = (id) => {
        setFeedData((prev) => prev.filter((entry) => entry.id !== id));
    };

    return (
        <FeedDataContext.Provider value={{ feedData, addFeedData, updateFeedData, deleteFeedData }}>
            {children}
        </FeedDataContext.Provider>
    )
}