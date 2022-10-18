// 1. RegEx Exercise 1: Find the Time
// const test = "Breakfast at 09:00 in the room 123:456.";

// const regEx = /\s\d{2}:\d{2}\s/gi;

// const result = test.match(regEx)
// console.log(result)

// ###################################################
// 2. RegEx Exercise 2: Find HTML Tags
// const REGEXP = /<[^>]+>/g

// let str = '<> <a href="/"> <input type="radio" checked> <b>'
// const result = str.match(REGEXP)

// console.log(result)

// ###################################################
// 3.RegEx Exercise 3: Find All Numbers

// const REGEXP = /[+-]?([0-9]+[.])?[0-9]+/g
// let str = "-1.5 0 2 -123.4"
// console.log(str.match(REGEXP))

// ###################################################
// 4. RegEx Exercise 4: Insert After Head

// const REGEXP = /(?<=<body [^>].+?>)/
// let str = "\<html><body style='height: 200px'> ... </body></html>"
// str = str.replace(REGEXP, `<h1>Hello</h1>`)
// console.log(str) 

// console.log(str) ➞ <html> <body style="height: 200px"><h1>Hello</h1> ... </body> </html>

// ###################################################
// 5. RegEx Exercise 5: Password Validation

// const REGEXP = /\w+d+(\W|_)+/g
// const REGEXP = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]/g
const REGEXP = /(?=.*\d)(?=.*[a-zA-Z])(?=.*[$@*&^%!#*?|])/g

console.log(REGEXP.test("bbA234c@cy~!"))
console.log(REGEXP.test("32Bl4###xxz"))
console.log(REGEXP.test("!abcABC9lzD"))
console.log(REGEXP.test("d@!2?%^&ahaZbb"))


// REGEXP.test("bbA234c@cy~!")  ➞ true
// REGEXP.test("32Bl4###xxz") ➞ true
// REGEXP.test("!abcABC9lzD") ➞ true
// REGEXP.test("d@!2?%^&ahaZbb") ➞ true
// ###################################################
// ###################################################
// ###################################################
// ###################################################
// ###################################################
// ###################################################
// ###################################################
