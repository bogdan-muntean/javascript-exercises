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
// const REGEXP = /^\s*$/
// 
// console.log(REGEXP.test("test")) 
// console.log(REGEXP.test("")) 

// REGEXP.test("") ➞ true

//   ----------------------------------------
// 4. Tile Teamwork Tactics
// dice  1-6 possible of advance positions
// position player 1 and 2  a and b 

function possibleBonus(a, b){
    if(b-a >= 1 && b-a <= 6 && a > 0 && b > 0){
        return true;
    } else if(a === b || b > a){
        return false
    } else {
        return false;
    }
}

console.log(possibleBonus(3, 7)) 
console.log(possibleBonus(1, 9)) 
console.log(possibleBonus(5, 3)) 

// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false

//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------