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
function redundant( string ){
    const secondFunc = () => {
        return string
    }
    return secondFunc
}
const f1 = redundant("test")
f1()
// redundant("sdsd")


//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------
//   ----------------------------------------