"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var randomNumber = Math.floor(Math.random() * 10 + 1);
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guess a right number");
}
else {
    console.log("You guessed a wrong Number");
}
;
