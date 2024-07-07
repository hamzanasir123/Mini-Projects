#! /usr/bin/env node
"use strict";
 Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 1000000; // Dollar
var myPinCode = 1234;
var myName = "HamzaNasir";
console.log("Welcome To Our Atm");
var nameAnswer = await inquirer_1.default.prompt([
    {
        name: "myName",
        message: "Enter Your Name",
        type: "string"
    }
]);
if (nameAnswer.myName != "HamzaNasir") {
    console.log("incorrect Name Plz Try Again");
}
else {
    var pinAnswer = await inquirer_1.default.prompt([
        {
            name: "Pin",
            message: "Enter Your Pin Number",
            type: "number"
        }
    ]);
    if (pinAnswer.Pin === myPinCode) {
        console.log("Correct Pin Code");
        var operationAns = await inquirer_1.default.prompt([
            {
                name: "operation",
                message: "How Can i Help You ?",
                type: "list",
                choices: ["Balance Check", "Withdraw", "Fast Cash"]
            }
        ]);
        if (operationAns.operation === "Withdraw") {
            var amountAns = await inquirer_1.default.prompt([
                {
                    name: "amount",
                    message: "Enter your Amount",
                    type: "number"
                }
            ]);
            if (amountAns.amount < 5000) {
                console.log("Minimum Amount Of Withdraw is 5000");
            }
            else if (amountAns.amount <= myBalance) {
                myBalance -= amountAns.amount;
                console.log("Dear HamzaNasir,Your Account Has Been Debited By ".concat(amountAns.amount));
                console.log("Your Remaining Balance Is  ".concat(myBalance));
                console.log("Thanks");
            }
            else {
                console.log("You Have Insufficient Balance");
            }
        }
        if (operationAns.operation === "Balance Check") {
            console.log("Your Balance Is  ".concat(myBalance));
            console.log("Thanks");
        }
        if (operationAns.operation === "Fast Cash") {
            var fastCashAns = await inquirer_1.default.prompt([
                {
                    name: "fastCashAmount",
                    message: "Please Select Amount",
                    type: "list",
                    choices: ["5000", "10000", "15000", "20000", "Other"]
                }
            ]);
            if (fastCashAns.fastCashAmount === "Other") {
                var otherAmount = await inquirer_1.default.prompt([
                    {
                        name: "Other",
                        message: "Enter Your Amount",
                        type: "number"
                    }
                ]);
                if (otherAmount.Other < 5000) {
                    console.log("Minimum Amount Of Withdraw is 5000");
                }
                else {
                    myBalance -= otherAmount.Other;
                    console.log("Dear HamzaNasir,Your Account Has Been Debited By ".concat(otherAmount.Other));
                    console.log("Your Remaining Balance Is ".concat(myBalance));
                    console.log("Thanks");
                }
            }
            else {
                myBalance -= fastCashAns.fastCashAmount;
                console.log("Your Remaining Balance Is ".concat(myBalance));
                console.log("Thanks");
            }
        }
    }
    else {
        console.log("Wrong Pin Code Please Try Again");
    }
    ;
}
