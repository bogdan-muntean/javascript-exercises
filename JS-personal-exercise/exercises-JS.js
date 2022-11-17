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

// function fizzBuzz(number){
//     for(let i = 1; i < number; i++){
//         if(i % 15 == 0){
//             console.log("FizzBuzz")
//         } else if(i % 3 == 0){
//             console.log("Fizz")
//         } else if(i % 5 == 0){
//             console.log("Buzz")
//         } else{
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(10)
// fizzBuzz(15)

//4. Ca si la 3. dar sa scrie par sau impar in functie de ce numar ii

// function parImpar(number){
//     let result = [];
//     for(let i = 0; i < number; i++){
//         if(i % 2 == 0){
//             // console.log("par");
//             result.push("par")
//         } else {
//             // console.log("impar");
//             result.push("impar")
//         } 
//     }
//     return result
// }

// console.log(parImpar(10))

//5.Sorteaza in ordinea lungimii stringurilor 

// const arrayOfCompanies = ["Luxoft","MutualMass" ,"Microsoft" ,"Brainest"]
// 
// console.log(arrayOfCompanies.sort((a, b) => a.length - b.length))


//6. Write a function called same, which accepts two arrays. The function should return true if every value in the 
//array has it's corresponding value squared in the second array. The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

function same (arr, test) {
    //1.cum descriu problema cu cuvintele proprii
    //'verificarea frecventei pentru patratul elementelor'
    //2.Putem introduce arr de numere
    //3.Afisam boolean, are aceeasi frecventa sau nu
    //4.pot determina ce se va afisa, cu ajutorul input-ului? Da
    //5.Cum denumesc importante parti de code din problema?
    //un obiect 'de comparat', in care fiecare element din arr1 va fi patratul lui arr1[x] de pe acea pozitie
    let counter = {}
    let testObject = {}
    for(let i = 0; i < arr.length; i++){
        let patratul = arr[i] * arr[i];
        counter[patratul] > 0 ? ++counter[patratul] : counter[patratul] = 1;
    }
    for(let i = 0; i < test.length; i++){
        testObject[test[i]] ? ++testObject[test[i]] : testObject[test[i]] = 1;
    }
    console.log(counter, testObject)
    if(counter.value === testObject.value){
        return true;
    } else {
        return false;
    }
}
console.log(same([3,7,5], [9, 49, 25]))
