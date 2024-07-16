#! /usr/bin/env node
import inquirer from 'inquirer';
let wordInput = await inquirer.prompt({
    type: 'input',
    name: 'word',
    message: 'Type Your Sentence',
});
let wordCounter = wordInput.word.trim().split(" ").length;
console.log(`Your total words are ${wordCounter}`);
