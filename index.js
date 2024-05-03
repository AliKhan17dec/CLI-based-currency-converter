#! /usr/bin/env node 
import inquirer from "inquirer";
const currency = {
    USD: 1,
    PKR: 278.70,
    EUR: 0.93,
    INR: 83.39,
    GBP: 0.80
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "Enter from currency",
        type: 'list',
        choices: ['USD', 'PKR', 'EUR', 'INR', 'GBP']
    },
    {
        name: 'to',
        message: "Enter To currency",
        type: 'list',
        choices: ['USD', 'PKR', 'EUR', 'INR', 'GBP']
    },
    {
        name: 'amount',
        message: "Enter your Amount",
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
