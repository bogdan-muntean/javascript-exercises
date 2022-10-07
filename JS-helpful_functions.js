
// 1. Readline in command promp and take the input in JS
//You need to install (npm install prompt-sync) before.
const readline = require("prompt-sync");
const prompt = readline()

let input = prompt("Enter the value: ");
console.log(`Your value is: ${input}`)
