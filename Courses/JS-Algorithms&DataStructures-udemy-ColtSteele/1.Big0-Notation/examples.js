
// O(1) space - ne referim la un numar
function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(sum([5,3,7,8,2]));

// O(n) space - ne referim la lungime
function double(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++){
        result.push(2 * arr[i]);
    }
    return result;
}
console.log(double([5,6,3,8,2]))