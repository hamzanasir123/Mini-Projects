
import inquirer from "inquirer";

let todos:any = [];

let condition = true;

while(condition){
let addtask = await inquirer.prompt(
    [
        {
            name:"addAns",
            message:"What You Want To Add in Your Todos",
            type: "input"
        },
        {
            name:"addMore",
            message:"Do You Want To Add More?",
            type:"confirm",
            default:"false"
        }
    ]
);

todos.push(addtask.addAns);

condition = addtask.addMore;

console.log(todos);
}