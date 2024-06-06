#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.bold.blue("\n \t wellcome to 'codehub with Moiz' >===CURRENCY_CONVERTOR===<\n"))


let c_value: {[key: string]: number}  ={

    PKR:276.97,
    UAE:3.67,
    USD:1
}

let ans = await inquirer.prompt([{
    type: "list",
    name:"frome",
    message:chalk.yellow.green("converting from"),
    choices:["PKR","UAE","USD"]
},

 {  
        type: "list",
        name:"TO",
        message:chalk.yellow.bold("converting TO"),
        choices:["PKR","UAE","USD"]
 },

 {
    type:"number",
    name:"amounte",
    message:chalk.yellow.blue.bold("your amount covert")
 }
])
console.log(c_value[ans.TO] / c_value[ans.frome] * ans.amounte);