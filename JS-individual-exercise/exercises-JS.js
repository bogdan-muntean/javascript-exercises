//1.Converteste anii in zile
let ani = 2;
function convertToDays(x) {
    return x * 360;
}
// console.log(convertToDays(ani))

//2. Returneaza primul element dintr-un array
function primulArray(arr) {
    return arr[0]
}
// console.log(primulArray([5, 'A', 10, 3]))

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
// fizzBuzz(10)
// fizzBuzz(15)

//4. Ca si la 3. dar sa scrie par sau impar in functie de ce numar ii

function parImpar(number){
    let result = [];
    for(let i = 0; i < number; i++){
        if(i % 2 == 0){
            // console.log("par");
            result.push("par")
        } else {
            // console.log("impar");
            result.push("impar")
        } 
    }
    return result
}

// console.log(parImpar(10))

//5.Sorteaza in ordinea lungimii stringurilor 

function sortByLength(arr){
    let result = arr.sort((a, b) => a.length - b.length);
    return result;
}
// console.log(sortByLength(["Luxoft","MutualMass" ,"Microsoft" ,"Brainest"]))


//6. Write a function called same, which accepts two arrays. The function should return true if every value in the 
//array has it's corresponding value squared in the second array. The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

//1.cum descriu problema cu cuvintele proprii
//'verificarea frecventei pentru patratul elementelor'
//2.input = arr de numere
//3.ouput = boolean, are aceeasi frecventa sau nu
//4.pot determina ce se va afisa, cu ajutorul input-ului? Da
//5.Cum denumesc importante parti de code din problema?
//un obiect 'de comparat'
function same (arr, test) {
    let counter = {}
    if(arr.length !== test.length){
        return false;
    }
    for(let i = 0; i < arr.length; i++){
        let patratul = arr[i] * arr[i];
        // let patratul = arr[i] ** 2;
        counter[patratul] > 0 ? ++counter[patratul] : counter[patratul] = 1;
    }
    for(let i = 0; i < test.length; i++){
        let element = test[i];
        if(!counter[element]){
            return false
        }  else {
            counter[element]--;
        }
    }
    return true;
}
// console.log(same([3,7,5], [9, 49, 25]))
// console.log(same([3,7,5], [2, 3, 10]))
// console.log(same([3,7,5], [7, 49, 25]))


// 7.Given a sorted array of integers, write a function called search, that accepts a value and returns the index where 
//the value passed to the function is located. If the value is not found, return -1
// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

function search(arr, num){
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let mid = Math.floor(left+right)
        if(arr[mid] === num){
            return mid;
        } else if(arr[mid] < num){
            left = mid + 1;
        } else if(arr[mid] > num){
            right = mid - 1;
        }
    }
    return -1;
}
//                  l         r
console.log(search([1,2,3,4,5,6],4)) // 3
console.log(search([1,2,3,4,5,6],6)) // 5
console.log(search([1,2,3,4,5,6],11)) // -1