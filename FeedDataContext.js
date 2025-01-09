import React, { createContext, useState, useContext } from "react";

const FeedDataContext = createContext();

export const useFeedData = () => useContext(FeedDataContext);

export const FeedDataProvider = ({ children }) => {
    const [feedData, setFeedData] = useState([]);

    const addFeedData = (entry) => {
        setFeedData((prevData) => [...prevData, entry]);
    };

    return (
        <FeedDataContext.Provider value={{ feedData, addFeedData }}>
            {children}
        </FeedDataContext.Provider>
    )
}