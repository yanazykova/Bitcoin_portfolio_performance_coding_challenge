const prices = [
    { effectiveDate: new Date(2021, 8, 1, 5, 0, 0), price: 35464.53 },
    { effectiveDate: new Date(2021, 8, 2, 5, 0, 0), price: 35658.76 },
    { effectiveDate: new Date(2021, 8, 3, 5, 0, 0), price: 36080.06 },
    { effectiveDate: new Date(2021, 8, 3, 13, 0, 0), price: 37111.11 },
    { effectiveDate: new Date(2021, 8, 6, 5, 0, 0), price: 38041.47 },
    { effectiveDate: new Date(2021, 8, 7, 5, 0, 0), price: 34029.61 },
];

const transactions = [
    { effectiveDate: new Date(2021, 8, 1, 9, 0, 0), value: 0.012 },
    { effectiveDate: new Date(2021, 8, 1, 15, 0, 0), value: -0.007 },
    { effectiveDate: new Date(2021, 8, 4, 9, 0, 0), value: 0.017 },
    { effectiveDate: new Date(2021, 8, 5, 9, 0, 0), value: -0.01 },
    { effectiveDate: new Date(2021, 8, 7, 9, 0, 0), value: 0.1 },
];

// Complete this method to return a list of daily portfolio values with one record for each day from the 01-09-2021-07-09-2021 in ascending date order

export function getDailyPortfolioValues() {

    let customerWallet = 0
    let performanceValue = 0
    let dailyPerformanceValueList = []

    // loop through the transactions list
        // loop through the price list
        // if the date of the price == date of the transaction
        // then add the value of the transaction to the client's bitcoins wallet
        // then multiply clients bitcoins by price = performance value
        // assign performanceValue
        // add new element to dailyPerformanceValueList with date and performance value
        // if not has the same date
        // then add new element to dailyPerformanceValueList with the date amd the performance value
        // 
        // if the date in the date list !== the date of the transaction list
        // then customerWallet * price = performanceValue
        // assign performanceValue
        // add new element to dailyPerformanceValueList with the date and the performance value
    // return dailyPerformanceValueList
    return [];
}
