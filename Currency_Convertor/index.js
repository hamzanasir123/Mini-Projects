"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 75,
    PKR: 280
};
console.log("Welcome To Currency Converter!");
var condition = "yes";
while (condition === "yes") {
    var userAns = await inquirer_1.default.prompt([
        {
            name: "from",
            type: "list",
            message: "Enter From Currency",
            choices: ["PKR", "USD", "EUR", "INR", "GBP"]
        },
        {
            name: "To",
            type: "list",
            message: "Enter To Currency",
            choices: ["PKR", "USD", "EUR", "INR", "GBP"]
        },
        {
            name: "amount",
            type: "number",
            message: "Enter Your Amount"
        }
    ]);
    var fromAmount = Currency[userAns.from];
    var toAmount = Currency[userAns.To];
    var amount = userAns.amount;
    var baseAmount = amount / fromAmount;
    var convertedAmount = baseAmount * toAmount;
    console.log(convertedAmount);
    var condition1 = await inquirer_1.default.prompt([
        {
            name: "Question",
            type: "list",
            message: "Would You Like To Continue?",
            choices: ["yes", "no"]
        }
    ]);
    condition = condition1.Question;
}
console.log("Thanks For Using Our Currency Converter!");
