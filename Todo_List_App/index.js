"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var todos = [];
var condition = true;
while (condition) {
    var addtask = await inquirer_1.default.prompt([
        {
            name: "addAns",
            message: "What You Want To Add in Your Todos",
            type: "input"
        },
        {
            name: "addMore",
            message: "Do You Want To Add More?",
            type: "confirm",
            default: "false"
        }
    ]);
    todos.push(addtask.addAns);
    condition = addtask.addMore;
    console.log(todos);
}
