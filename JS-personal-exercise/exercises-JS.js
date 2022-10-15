//1.Converteste anii in zile
// let ani = 2;
// function convertToDays(x) {
//     return x * 360;
// }
// console.log(convertToDays(ani))

//2. Returneaza primul element dintr-un array
// let array = [5, 'A', 10, 3]
// function primulArray(arr) {
//     return arr[0]
// }
// console.log(primulArray(array))

//3.The Fizz Buzz TestWrite a method that returns array of all the numbers from 1 to an integer argument. 
//But for multiples of three use “Fizz” instead of the number and for the multiples of five use “Buzz”. 
//For numbers which are multiples of both three and five use “FizzBuzz”.

// fizzBuzz(10) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
// fizzBuzz(15) ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

// Notes
// Make sure to return an array.

function fizzBuzz(number){
    for(let i = 1; i < number; i++){
        if(i % 15 == 0){
            console.log("FizzBuzz")
        } else if(i % 3 == 0){
            console.log("Fizz")
        } else if(i % 5 == 0){
            console.log("Buzz")
        } else{
            console.log(i)
        }
    }
}
fizzBuzz(10)
fizzBuzz(15)
