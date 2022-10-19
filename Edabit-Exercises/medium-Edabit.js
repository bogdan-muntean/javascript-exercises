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
// function shiftToRight(a, b){
//     let finalResultB = 1;
//     for(let i = 1; i <= b; i++){
//         finalResultB = finalResultB*2;
//     }
//     return Math.floor(a/finalResultB);
// }

// console.log(shiftToRight(80, 3))
// console.log(shiftToRight(-24, 2))
// console.log(shiftToRight(-5, 1))
// console.log(shiftToRight(4666, 6))
// console.log(shiftToRight(3777, 6))
// console.log(shiftToRight(-512, 10))

// shiftToRight(80, 3) ➞ 10
// shiftToRight(-24, 2) ➞ -6
// shiftToRight(-5, 1) ➞ -3
// shiftToRight(4666, 6) ➞ 72
// shiftToRight(3777, 6) ➞ 59
// shiftToRight(-512, 10) ➞ -1

//   ----------------------------------------
// 6. Perimeters with a Catch
// Perimeter of a square: 4 * side.
// Perimeter of a circle: 6.28 * radius.  (2 * pi * radius)

// function perimeter(type, value){
    // if(type === "s"){
        // return 4 * value
    // } else if(type === "c"){
        // return 6.28 * value
    // }
// }
// 
// console.log(perimeter("s", 7)) 
// console.log(perimeter("c", 4)) 
// console.log(perimeter("c", 9)) 

// perimeter("s", 7) ➞ 28
// perimeter("c", 4) ➞ 25.12
// perimeter("c", 9) ➞ 56.52

//   ----------------------------------------
// 7. Find Number of Digits in Number
// Examples

// function num_of_digits(number){
    // let lengthOfNumber = 0
    // if(number === 0){
        // return 1;
    // }
    // for(let i = number; i >= 1; i = i/10){
        // lengthOfNumber++
    // }
    // return lengthOfNumber
// }

// console.log(num_of_digits(1000))
// console.log(num_of_digits(12))
// console.log(num_of_digits(1305981031))
// console.log(num_of_digits(0))

// num_of_digits(1000) ➞ 4
// num_of_digits(12) ➞ 2
// num_of_digits(1305981031) ➞ 10
// num_of_digits(0) ➞ 1

//   ----------------------------------------
// 8. Burglary Series (04): Add its Name

function addName(object, a, b){
    let ourObject = object;
    let nameProperty = `${a}`;
    ourObject[nameProperty] = b;
    return ourObject
}

console.log(addName({}, "Brutus", 300)) 
console.log(addName({ piano: 500 }, "Brutus", 400)) 
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)) 


// Examples
// addName({}, "Brutus", 300)                            ➞ { Brutus: 300 }
// addName({ piano: 500 }, "Brutus", 400)                ➞ { piano: 500, Brutus: 400 }
// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------