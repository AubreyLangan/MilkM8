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

    const [milkStash, setMilkStash] = useState({
        fridge: 0,
        freezer: 0,
        deepFreezer: 0,
    });

    const addMilkStash = (amount, location) => {
        setMilkStash((prev) => ({
            ...prev,
            [location]: prev[location] + amount,
        }));
    };

    const removeMilkStash = (amount, location) => {
        setMilkStash((prev) => ({
            ...prev,
            [location]: Math.max(onabort, prev[location] - amount),
        }));
    };

    return (
        <FeedDataContext.Provider value={{ feedData, addFeedData, updateFeedData, deleteFeedData, milkStash, addMilkStash, removeMilkStash }}>
            {children}
        </FeedDataContext.Provider>
    )
}