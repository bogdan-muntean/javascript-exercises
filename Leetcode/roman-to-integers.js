function romanToInt(roman){
    const dictionar = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    let suma = 0
    let pointerPreviosCharValue = 0
    console.log(roman, typeof roman)
    for(let i = 0; i < roman.length; i++){
        let romanChar = roman.charAt(i);
        let actualRomanCharValue = dictionar[romanChar] 
        console.log(`pasul ${i} cu caracterul ${romanChar}`)
        suma = pointerPreviosCharValue < actualRomanCharValue ? 
            suma + actualRomanCharValue - (pointerPreviosCharValue * 2) : 
            suma + actualRomanCharValue;

        pointerPreviosCharValue = actualRomanCharValue;
    }

    return suma;
}

console.log(romanToInt("III"))
console.log(romanToInt("MCMXCIV"))

// WRONG
// function romanToInt(roman){
//     const dictionar = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
//     // const romanArray = roman.split("")
//     console.log(roman)

//     let suma = 0;

//     for(let i = 0; i < roman.length; i++){
//         let nextElement = roman.charAt(i+1);
//         if(roman.charAt(i) === 'I'){
//             if(nextElement === 'V'){
//                 suma += 4;
//                 i += 2;
//             } else if(nextElement === 'X'){
//                 suma += 9;
//                 i += 2;
//             }
//         } else if(roman.charAt(i) === 'X'){
//             if(nextElement === 'L'){
//                 suma += 40;
//                 i += 2;
//             } else if(nextElement === 'C'){
//                 suma += 90;
//                 i += 2;
//             }
//         } else if(roman.charAt(i) === 'C'){
//             if(nextElement === 'D'){
//                 suma += 400;
//                 i += 2;
//             } else if(nextElement === 'M'){
//                 suma += 900;
//                 i += 2;
//             }
//         } else {
//             let letter = roman[i]
//             suma = suma + dictionar[letter]
//         }
//         console.log(`pasul ${i} si suma = ` + suma)
//     }

//WRONG
//     // for(let i = romanArray.length - 1; i >= 0 ; i--){
//     //     if(i === romanArray.length - 1){
//     //         suma += dictionar[romanArray[i]]
//     //         // continue;
//     //     }

//     //     let value1 = dictionar[romanArray[i]]
//     //     let value2 = dictionar[romanArray[i + 1]]
//     //     suma += value1;
//     //     console.log(`pasul ${i} si suma = ` + suma)

//     //     if(value1 < value2){
//     //         suma += (value2 - value1);
//     //         suma -= value2
//     //         console.log("value1 < value2 " + suma)
//     //     }
//     //     // MCMXCIV
//     // }

//     // romanArray.map((element) => {
//     //     let value = dictionar[element]
//     //     if()
//     // })
//     return suma;
// }
// console.log(romanToInt("III"))
// console.log(romanToInt("MCMXCIV"))
