// Write a function called same, which accepts two arrays. The function should return true if every value in the 
//array has it's corresponding value squared in the second array. The frequency of values must be the same.
// same([1,2,3], [4,1,9]) // true
// same([1,2,3], [1,9]) // false
// same([1,2,1], [4,4,1]) // false (must be same frequency)

function same (arr, test) {
    //1.cum descriu problema cu cuvintele proprii
    //'verificarea frecventei pentru patratul elementelor'
    //2.input = arr de numere
    //3.ouput = boolean, are aceeasi frecventa sau nu
    //4.pot determina ce se va afisa, cu ajutorul input-ului? Da
    //5.Cum denumesc importante parti de code din problema?
    //un obiect 'de comparat'
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
console.log(same([3,7,5], [9, 49, 25]))
console.log(same([3,7,5], [2, 3, 10]))
console.log(same([3,7,5], [7, 49, 25]))
