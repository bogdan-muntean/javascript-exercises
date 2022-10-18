// 1. How Much is True?
// const array = [true, false, false, true, false]
// function countTrue(arr) {
//     let arrayLength = 0;
//     let result = arr.forEach( (element) => {
//         if(element === true) {arrayLength++;}
//     } )  
//     return arrayLength;
// }
// console.log(countTrue(array));

//   ----------------------------------------
// 2.A Redundant Function

// function redundant (string){
//     return function () {
//         let result = `"${string}"`;
//         return result;
//     }
// }

// const f3 = redundant("qqq")
// console.log(f3())

//   ----------------------------------------
// 3. RegEx Exercise: An empty string

// const REGEXP = /(?!=.*[\s\d\w])/g
const REGEXP = /^\s*$/

console.log(REGEXP.test("test")) 
console.log(REGEXP.test("")) 

// REGEXP.test("") ➞ true


//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------