import inquirer from "inquirer";
let Currency :any = {
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:75,
    PKR:280
    

};
console.log("Welcome To Currency Converter!");
let condition = "yes";
while(condition === "yes")
    {let userAns = await inquirer.prompt(
    [
        {
            name:"from",
            type:"list",
            message:"Enter From Currency",
            choices:["PKR","USD","EUR","INR","GBP"]
        },
        {
            name:"To",
            type:"list",
            message:"Enter To Currency",
            choices:["PKR","USD","EUR","INR","GBP"]
        },
        {
            name:"amount",
            type:"number",
            message:"Enter Your Amount"
        }
    ]
);
let fromAmount = Currency[userAns.from];
let toAmount = Currency[userAns.To];
let amount = userAns.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
let condition1 = await inquirer.prompt(
    [
        {
            name:"Question",
            type:"list",
            message:"Would You Like To Continue?",
            choices:["yes","no"]
        }
    ]
);
condition = condition1.Question;
}
console.log("Thanks For Using Our Currency Converter!");



