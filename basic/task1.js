// Task 1

var orangeQuantity = 23;

var orangeUnitPrice = 20;

var appleQuantity = 26;

var appleUnitPrice = 40;

var appleTotalPrice = appleQuantity * appleUnitPrice;
var orangeTotalPrice = orangeQuantity * orangeUnitPrice;

var totalPrice = appleTotalPrice + orangeTotalPrice;

var moneyGiven = "2000";

var returned =  parseInt(moneyGiven) - totalPrice;

console.log(returned);