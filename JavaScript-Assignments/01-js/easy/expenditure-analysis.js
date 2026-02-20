/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    let totals = {};

    for(let i = 0;i<transactions.length;i++){
      let transaction = transactions[i];
      let category = transaction.category;
      let price = transaction.price;

      if(totals[category] == undefined){
        totals[category] = 0;
      }
      totals[category] = totals[category] + price;
    }

    let result = [];

    for(let category in totals){
      let obj = {}
      obj[category] = totals[category];
      result.push(obj);
    }


    return result;
}

module.exports = calculateTotalSpentByCategory;