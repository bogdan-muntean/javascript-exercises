// 1.Bitwise Operations
// function bitwiseAND(n1, n2) {
//     console.log(`Binar form of ${n1} = ${n1.toString(2)} and ${n2} = ${n2.toString(2)}`)
//     return n1 & n2
// }

// function bitwiseOR(n1, n2) {
//     return n1 | n2
// }

// function bitwiseXOR(n1, n2) {	
//     return n1 ^ n2
// }
// console.log("Bitwise AND = " + bitwiseAND(7, 12))
// console.log("Bitwise OR = " + bitwiseOR(7, 12))
// console.log("Bitwise XOR = " + bitwiseXOR(7, 12))
//  -----------------------------------------
// 2.Add up the Numbers from a Single Number

// let var1 = 4;

// function sumOfNumbers (number){
//     let sum = 0;
//     for( let i = 1; i <= number; i++){
//         sum += i;
//     }
//     return sum
// }
// console.log(sumOfNumbers(var1))

//  -----------------------------------------
// 3. Matchstick Houses
//input from terminal
// const readline = require("prompt-sync");
// const prompt = readline()
// let input = prompt("Enter the value: ");
// console.log(`Your value is ${input} and has this result: ${matchStick(input)}`)

// let test1 = 0;
// let test2 = 4;
// let test3 = 25;
// let test4 = 81;


// function matchStick( number ){
//     let sticks = 0;
//     if (number === 0) return 0;
//     for( let i = 1; i <= number; i++ ){
//         if( i == 1 ){ 
//             sticks += 6; 
//         } else if ( i != 1 ){
//             sticks += 5;
//         }
//         // console.log(sticks)
//     }
//     return sticks;
// }

// console.log( matchStick(test1))
// console.log( matchStick(test2))
// console.log( matchStick(test3))

//  -----------------------------------------
// 4. Left Shift by Powers of Two 
const readline = require("prompt-sync");
const prompt = readline()

let number = prompt("Enter the number: ");
let power = prompt("Enter the power of two: ");

function shiftToLeft(x, y){
    if(y === 1)
        return 2;
    else if(y === 0)
        return 1
    console.log(y)
    return x * shiftToLeft(2, y-1);
}
console.log(`Your result is: ${shiftToLeft(number, power)}`);

//  -----------------------------------------
//  -----------------------------------------
//  -----------------------------------------
//  -----------------------------------------
//  -----------------------------------------
//  -----------------------------------------