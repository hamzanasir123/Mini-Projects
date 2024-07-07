#! /usr/bin/env node

// SHABANG

import inquirer from "inquirer";

const answer = await inquirer.prompt([{message: "Enter first number", 
type: "number", name: "firstNumber"},

{message: "Enter second number", type: "number", name: "secondnumber"},
{
    message: "select one of the operators to perform action", type: "list", name: "operator",
     choices: ["addition", "subtraction","multiplication","division","percentage"],
}]);

// conditional statement
if (answer.operator === "addition"){
    console.log(+ answer.firstNumber + answer.secondnumber);
}else if (answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondnumber);
}else if (answer.operator === "multiplication"){
    console.log(answer.firstNumber * answer.secondnumber);
}else if (answer.operator === "division"){
console.log(answer.firstNumber / answer.secondnumber);
}else if (answer.operator === "percentage"){
    console.log(answer.firstNumber / answer.secondnumber * 100 );
}else {console.log("Please select a valid number");
}





