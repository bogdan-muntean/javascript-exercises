function countUniqueValue(arr){
    let sortedArray = arr.sort();
    if(arr !== sortedArray){
        return false;
    } else if(arr.length === 0){
        return 0;
    }
    let i = 0;
    let j = 1
    
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
            j++;
    }
    return i+1;

}

console.log(countUniqueValue([1,1,1,1,1,2])) // 2
console.log(countUniqueValue([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValue([])) 
console.log(countUniqueValue([-2,-1,-1,0,1])) // 4

