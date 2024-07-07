
import inquirer from "inquirer";

const answer :{
    Sentence:string
} = await inquirer.prompt(
    [
        {
            name:"Sentence",
            type:"input",
            message:"Enter Your Sentence To Count The Word:"
        }
    ]
)
const words = answer.Sentence.trim().split(" ")

console.log(words);
console.log(`Your Sentence Word Count Is ${words.length}`)  
