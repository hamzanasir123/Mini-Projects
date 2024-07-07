#! /usr/bin/env node
"use strict";
// SHABANG
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([{ message: "Enter first number",
        type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform action", type: "list", name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division", "percentage"],
    }]);
// conditional statement
if (answer.operator === "addition") {
    console.log(+answer.firstNumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondnumber);
}
else if (answer.operator === "percentage") {
    console.log(answer.firstNumber / answer.secondnumber * 100);
}
else {
    console.log("Please select a valid number");
}
