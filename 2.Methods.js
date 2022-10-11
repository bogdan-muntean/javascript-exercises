// 1. For each
let fruits1 = ["apple", "orange", "cherry"];
fruits1.forEach(myFunction);

//   ------------------------------------------------

// There are four ways to convert a string to an array in JavaScript:

// 1. The String.split() method uses a separator as a delimiter to split the string and returns an array.
let str2 = 'Apple,Orange,Mango,Cherry';
let fruits2 = str2.split(',');
console.log(fruits2);
// ['Apple', 'Orange', 'Mango', 'Cherry']
// If an empty string ("") is used as a separator, the string is split between each character

let fruits3 = str2.split(',', 2);
console.log(fruits3);
// ['Apple', 'Orange']

// 2. The Array.from() method accepts a string as input and returns a character array.
let str4 = '🍑🍓🍉🍇🍒';
let fruits4 = Array.from(str4);
console.log(fruits4);
// ['🍑', '🍓', '🍉', '🍇', '🍒']


// 3. Spread operator (...) from ES6 converts the string into a characters array.
let str5 = '🍑🍓🍉🍇🍒';
let fruits5 = [...str5];
console.log(fruits5);
// ['🍑', '🍓', '🍉', '🍇', '🍒']

//**You should always use the Array.from() or a spread operator for strings containing emojis

// 4. The Object.assign() method also takes the string as input and returns a character array.

//   ------------------------------------------------
//   ------------------------------------------------
//   ------------------------------------------------
//   ------------------------------------------------
//   ------------------------------------------------