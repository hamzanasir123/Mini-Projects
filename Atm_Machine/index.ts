#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 1000000 ; // Dollar
let myPinCode = 1234;
let myName = "HamzaNasir";

console.log("Welcome To Our Atm");
let nameAnswer = await inquirer.prompt(
    [
        {
            name:"myName",
            message:"Enter Your Name",
            type:"string"
        }
    ]
);
if(nameAnswer.myName != "HamzaNasir"){
    console.log("incorrect Name Plz Try Again");}else{
let pinAnswer = await inquirer.prompt(
    [
        {
            name:  "Pin",
            message: "Enter Your Pin Number",
            type: "number"
        }
    ]
);
if(pinAnswer.Pin === myPinCode){
       console.log("Correct Pin Code")
        let operationAns = await inquirer.prompt(
        [
            {
                name:"operation",
                message:"How Can i Help You ?",
                type:"list",
                choices:["Balance Check", "Withdraw","Fast Cash"]
            }
        ]
       );
       if(operationAns.operation === "Withdraw"){
          let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"Enter your Amount",
                    type:"number"
                }
            ]
          )
          if(amountAns.amount < 5000 ){
            console.log("Minimum Amount Of Withdraw is 5000");
          }else
          if(amountAns.amount <= myBalance){
          myBalance -= amountAns.amount 
          console.log(`Dear HamzaNasir,Your Account Has Been Debited By ${amountAns.amount}`);
          console.log(`Your Remaining Balance Is  ${myBalance}`);
          console.log("Thanks");
        }else{
            console.log("You Have Insufficient Balance")
        }
       }
       if(operationAns.operation === "Balance Check"){
        console.log(`Your Balance Is  ${myBalance}`);
        console.log("Thanks");
        
    }
    if(operationAns.operation === "Fast Cash"){
        let fastCashAns = await inquirer.prompt(
            [
                {
                    name:"fastCashAmount",
                    message:"Please Select Amount",
                    type:"list",
                    choices:["5000","10000","15000","20000","Other"]
                }
            ]
            );
            if(fastCashAns.fastCashAmount === "Other"){
                let otherAmount = await inquirer.prompt(
                    [
                        {
                            name:"Other",
                            message:"Enter Your Amount",
                            type:"number"
                        }
                    ]
                    );
                    if(otherAmount.Other < 5000){
                        console.log("Minimum Amount Of Withdraw is 5000");
                    }else{
                    myBalance -= otherAmount.Other
                    console.log(`Dear HamzaNasir,Your Account Has Been Debited By ${otherAmount.Other}`);
                    console.log(`Your Remaining Balance Is ${myBalance}`)
                    console.log("Thanks");}
                }
                
                else{
                    myBalance -= fastCashAns.fastCashAmount
                    console.log(`Your Remaining Balance Is ${myBalance}`)
                    console.log("Thanks");}
         }
       }
else{
    console.log("Wrong Pin Code Please Try Again")
};
    }


