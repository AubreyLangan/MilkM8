import React, { createContext, useState, useContext } from "react";

const FeedDataContext = createContext();

export const useFeedData = () => useContext(FeedDataContext);

export const FeedDataProvider = ({ children }) => {
    const [feedData, setFeedData] = useState([]);
    const [milkStash, setMilkStash] = useState([]);

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

    const addMilkStash = (entry) => {
        setMilkStash((prev) => [...prev, entry]);
    };

    const updateMilkStash = (entry) => {
        setMilkStash((prev) =>
            prev.map((item) => (item.id === entry.id ? entry : item))
        );
    };

    const removeMilkStash = (id) => {
        setMilkStash((prev) => prev.filter((entry) => entry.id !== id));
    };

    console.log(milkStash);

    return (
        <FeedDataContext.Provider 
            value={{ 
                feedData,
                milkStash, 
                addFeedData, 
                updateFeedData, 
                deleteFeedData,  
                addMilkStash,
                updateMilkStash, 
                removeMilkStash, 
            }}
        >
            {children}
        </FeedDataContext.Provider>
    );
};

export default FeedDataProvider;