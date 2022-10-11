// 1. RegEx Exercise 1: Find the Time
const test = "Breakfast at 09:00 in the room 123:456.";

const regEx = /\s\d{2}:\d{2}\s/gi;

const result = test.match(regEx)
console.log(result)