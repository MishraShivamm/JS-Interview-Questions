/* Best Time to Buy and Sell Stocks
You are given an array prices where prices[i] is the price of a given stock on the ith day
You want to maximize profit by choosing a single day to buy one stock and choosing a different day 
in the future to sell that stock. Return the maximum profit , iff you cannot achieve any profit , return 0.
 */

// Brute Force Solution 

// const maxProfit = (prices) =>{
//     let globalProfit = 0;
//     for (let i = 0; i<prices.length-1;i++){
//         for(let j = i+1;j<prices.length;j++){
//             const currentProfit = prices[j] - prices[i];
//             if( currentProfit > globalProfit) globalProfit = currentProfit;
//         }
//     }
//     return globalProfit;
// }
// console.log(maxProfit([7,9,3,5,1,11]));

// Optimiized Solution ( we'll use Greedy Algorithm)

const maxProfit = (prices) =>{
    let minStockPurchasePrie = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if(prices[i] < minStockPurchasePrie){
            minStockPurchasePrie = prices[i];
        }        
        //  let currentProfit = prices[i] -minStockPurchasePrie;
         profit = Math.max(profit,prices[i] -minStockPurchasePrie ); 
    } return profit;
}
console.log(maxProfit([7,1,5,6,3,4]));

// logic 
// [7,1,5,3,6,4]
// minimum value of the stock is 7 
// profit  =  0 , 0 
//  as the next value is 1 , so we'll replace the minimum value from 7 to 1 => 5 => 3 =>6
// profit  =  0 => 0 => 5-1 = 4 => 0 => 5=> 0 
