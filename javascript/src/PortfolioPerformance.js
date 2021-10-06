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

function getDailyPortfolioValues(prices, transactions) {

    
    
    // Plan A:
    // 1. loop through the prices list:

        //2. compare the dates within the array (use setHours method to exclude hours and minutes?) and identify objects with equal dates (if there is >1 date with the same value):             

        //3. pick date containing the most recent fund price
        // and assign the result to the variable dailyPrice

    // 4. loop through the transactions list
        // identify keys with equal date values  
        // add together all the values for this date 
        // assign the result to variable dailyBitcoins
    
    // 5. multiply dailyPrice by dailyBitcoins
    // assign the result to dailyPerformanceValueList

    
    // Plan B:

    // let customerBitcoins = 0
    // let performanceValue = 0
    // let dailyPerformanceValueList = []

    
        // if the date in the price list == date in the transaction list:
        // add the value of the transaction to the customerBitcoins;

        // for (object in transactions)
        //  if (transactions[effectiveDate] ==  prices[effectiveDate])
        //  customerBitcoins.push(transactions[value])

        // then multiply clients bitcoins by price (= performance value)
        // assign the result to performanceValue
        // add new element to dailyPerformanceValueList with date and performance value
        // if it does not have the same date:
        // add new element to dailyPerformanceValueList with the date and the performance value
        // 
        // if the date in the price list !== the date of the transaction list
        // then customerWallet * price = performanceValue
        // assign performanceValue
        // add new element to dailyPerformanceValueList with the date and the performance value
    
    return [];
}

getDailyPortfolioValues(prices, transactions)
