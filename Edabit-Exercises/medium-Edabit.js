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

// function possibleBonus(a, b){
//     if(b-a >= 1 && b-a <= 6 && a > 0 && b > 0){
//         return true;
//     } else if(a === b || b > a){
//         return false
//     } else {
//         return false;
//     }
// }

// console.log(possibleBonus(3, 7)) 
// console.log(possibleBonus(1, 9)) 
// console.log(possibleBonus(5, 3)) 

// possibleBonus(3, 7) ➞ true
// possibleBonus(1, 9) ➞ false
// possibleBonus(5, 3) ➞ false

//   ----------------------------------------
// 5. Right Shift by Division
// The right shift operation is similar to floor division by powers of two.
// Sample calculation using the right shift operator ( >> ):
function shiftToRight(a, b){
    let finalResultB = 1;
    for(let i = 1; i <= b; i++){
        finalResultB = finalResultB*2;
    }
    return Math.floor(a/finalResultB);
}

console.log(shiftToRight(80, 3))
console.log(shiftToRight(-24, 2))
console.log(shiftToRight(-5, 1))
console.log(shiftToRight(4666, 6))
console.log(shiftToRight(3777, 6))
console.log(shiftToRight(-512, 10))

// shiftToRight(80, 3) ➞ 10
// shiftToRight(-24, 2) ➞ -6
// shiftToRight(-5, 1) ➞ -3
// shiftToRight(4666, 6) ➞ 72
// shiftToRight(3777, 6) ➞ 59
// shiftToRight(-512, 10) ➞ -1
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------