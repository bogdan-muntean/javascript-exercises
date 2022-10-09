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
// const readline = require("prompt-sync");
// const prompt = readline()

// let number = prompt("Enter the number: ");
// let power = prompt("Enter the power of two: ");

// while(power < 0){
//     power = prompt("Power of two need to be a positive number: ");
// }

// function shiftToLeft(x, y){
//     if(y === 1)
//         return x * 2;
//     else if(y === 0)
//         return x * 1;
//     console.log(y)
//     return x * shiftToLeft(2, y-1);
// }
// console.log(`Your result is: ${shiftToLeft(number, power)}`);

//  -----------------------------------------
// 5. Find the Smallest and Biggest Numbers

// const readline = require("prompt-sync");
// const prompt = readline()

// let input = prompt("Introduce an array of numbers and keep a space between them: ");
// let array = input.split(" ");
// console.log(`Array is: ${array} `)

// let min = array[1]
// let max = array[1]
// function minMax(arr){
//     arr.forEach(element => {
//         if(element < min)
//             min = element
//         if(element > max)
//             max = element
//     });
// }
// minMax(array)
// console.log(`Minim = ${min} and Maximum = ${max}`)

//  -----------------------------------------
// 6.Is it Time for Milk and Cookies?
// const readline = require("prompt-sync");
// const prompt = readline()
// let year = prompt("Introduce the year: ")
// let month = prompt("Introduce the month: ")
// let day = prompt("Introduce the day: ")

// function timeForMilkAndCookies(myDate) {
// 	if( (myDate.getMonth()+1 === 12) && (myDate.getDate() === 24) ){
//         return true;
//     } else 
//         return false;
// }
// console.log(timeForMilkAndCookies(new Date(year, month, day)))

// if ((myDate.getDate() != day) || 
//     (myDate.getMonth() != month - 1) || 
//     (myDate.getFullYear() != year))

//  -----------------------------------------
// 7. Which Function Returns the Larger Number?

// function whichIsLarger(f, g){
//     if(f < g) {
//         return "g";
//     } else if(f > g) {
//         return "f";
//     } else {
//         return "neither";
//     }
// };

// console.log(whichIsLarger(() => 5, () => 10));
// console.log(whichIsLarger(() => 50505050, () => 5050));
// console.log(whichIsLarger(() => 25, () => 25));

//  -----------------------------------------
// 8. Convert a Number to Base-2

function binar(numar) {
	let rezultat = "";
	if (numar == 0) {
		rezultat = "0";
	}
	while (numar > 0) {
			rezultat += numar % 2;
            console.log("rezultat: ", rezultat)
			numar = Math.floor(numar/2);
            console.log("numar: ",numar)
		};
	return rezultat.split("").reverse().join("");
}

console.log(binar(1))
console.log(binar(5))
binar(10)



//  -----------------------------------------
//  -----------------------------------------