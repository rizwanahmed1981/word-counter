#! /user/bin/env node
import inquirer from "inquirer"

const answers: {
    sentence: string,
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "type your paragraph of which you want to count words: "
    }
])

const words = answers.sentence.trim().split(" ")
console.log(`your word count is ${words.length} `);