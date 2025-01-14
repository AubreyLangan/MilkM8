import React from "react";
import { useFeedData } from "../Contexts/FeedDataContext";
import { calculateFeedStatistics } from "../utils/CalculateFeedStatistics";

const FeedStatistics = () => {
    const { feedData } = useFeedData();
    const stats = calculateFeedStatistics(feedData);

    const totalFeeds = Object.values(stats).reduce(
        (total, { count }) => total + count,
        0
    );

    const totalAmount = Object.values(stats).reduce(
        (total, { totalAmount }) => total + totalAmount,
        0
    );

    return (
        <div className="feed-statistics">
            <h3>Feed Statistics</h3>
            {Object.keys(stats).map((feedType) => (
                <div key={feedType}>
                    <h4>{feedType}</h4>
                    <p>Total Amount: {stats[feedType].totalAmount.toFixed(1)} Oz</p>
                    <p>Number of Feeds: {stats[feedType].count}</p>
                </div>
            ))}
            <h4>Total Summary</h4>
            <p>Total Feeds: {totalFeeds}</p>
            <p>Total Amount: {totalAmount.toFixed(1)}</p>
        </div>
    );
};

export default FeedStatistics;