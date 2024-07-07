"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word:"
    }
]);
var words = answer.Sentence.trim().split(" ");
console.log(words);
console.log("Your Sentence Word Count Is ".concat(words.length));
