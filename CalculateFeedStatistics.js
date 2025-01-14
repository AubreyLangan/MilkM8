export const calculateFeedStatistics = (feedData) => {
    return feedData.reduce((acc, entry) => {
        const { feedType, amount } = entry;

        if (!acc[feedType]) {
            acc[feedType] = { totalAmount: 0, count: 0 };
        }

        acc[feedType].totalAmount += parseFloat(amount);
        acc[feedType].count += 1;

        return acc;
    }, {});
};