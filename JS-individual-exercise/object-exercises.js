// 1. Write a JavaScript program to list the properties of a JavaScript object. 
const student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};
// Sample Output: name,sclass,rollno

const resultEx1V1 = Object.keys(student)
console.log("resultEx1V1: ", resultEx1V1)

const resultEx1V2 = []
for(let key in student){
    resultEx1V2.push(key)
}
console.log("resultEx1V2: ", resultEx1V2)

const resultEx1V3 = []
for(let key of Object.keys(student)){
    resultEx1V3.push(key)
}
console.log("resultEx1V3: ", resultEx1V3)

console.log("####################")

// 2. Write a JavaScript program to delete the rollno property from the following object. 
//Also print the object before or after deleting the property. 
// Sample object:
const studentEx2 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

const resultEx2V1 = Object.entries(studentEx2).reduce((acc, e) => {
    if(e[0] === "rollno") return acc;
    return {...acc, [e[0]]: e[1]}
},{})
console.log("resultEx2V1: ", resultEx2V1)
//      ---------------- varianta cu delete object.prop
delete studentEx2.rollno
const resultEx2V2 = studentEx2
console.log("resultEx2V2: ", resultEx2V2)

console.log("####################")

// 3. Write a JavaScript program to get the length of a JavaScript object. 
// Sample object :
const studentEx3 = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
}; 

const resultEx3V1 = (Object.keys(studentEx3)).length
console.log("resultEx3V1: ", resultEx3V1)

console.log("####################")

// 4. Write a JavaScript program to display the reading status 
//(i.e. display book name, author name and reading status) of the following books. 

var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }
];

let resultEx4V1 = "";
for(let object of library){
    resultEx4V1 += `${object.author} - ${object.title} : still reading = ${object.readingStatus} \n `
}
console.log("resultEx4V1: ", resultEx4V1)
console.log("####################")

// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes. 
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height){
        this.details = {
            radius: radius,
            height: height
        }
    }
    volume() {
        let radiusValue = this.details.radius * this.details.radius
        return Math.PI * radiusValue * this.details.height;
        // return 3.14 * radiusValue * this.details.height;
    } 
}
const Cylinder1 = new Cylinder(4, 10)
const Cylinder2 = new Cylinder(2, 7)
console.log("Volum for C1 in cm^3 : ", Cylinder1.volume())
console.log("Volum for C2 in cm^3 : ", Cylinder2.volume())
console.log("####################")


// 6. Write a Bubble Sort algorithm in JavaScript. 
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]

const bubbleEx6 = [6,4,0, 3,-2,1];
const resultEx6V1 = bubbleEx6;
let sorts = false;
for(let i = 0; i < resultEx6V1.length; i++){
    let valueToCompare = resultEx6V1[i]
    if(valueToCompare > resultEx6V1[i+1]){
        resultEx6V1[i] = resultEx6V1[i+1]
        resultEx6V1[i+1] = valueToCompare
        sorts = true;
        // console.log(`pasul ${i} `, resultEx6V1)
    } 
    if(i === (resultEx6V1.length - 2) && sorts === false){
        break;
    } else if(i === (resultEx6V1.length - 2) && sorts === true){
        i = -1;
        sorts = false
    }
}
console.log("resultEx6V1: ", resultEx6V1)

const resultEx6V2 = bubbleEx6;
function bubbleSort(array){
    for(let i = 0; i < array.length; i++){          //cand i creste, restrangem aria lui de cautare 
        //pentru ca dupa fiecare pas, noi stim ca ultimul numar este cu siguramnta cel mai mare (s-a facut bubble up)
        for(let j = 0; j < (array.length - 1 - i); j++){ //j face bubble up (duce la final, cel mai mare numar)
            if(array[j] > array[j+1]){                   //finalul restrangandu-se, dupa fiecare pas 
                let valoareTemporala = array[j];
                array[j] = array[j+1]
                array[j+1] = valoareTemporala
            }                                             
        }
    } 
    return array
}
console.log("resultEx6V2 - bubbleV1: ", bubbleSort(resultEx6V2))

function bubbleSortV2(array){
    for(let i = 0; i < array.length - 1; i++){   
        for(let j = 0; j < (array.length - 1); j++){
            if(array[j] > array[j+1]){                   
                let valoareTemporala = array[j];
                array[j] = array[j+1]
                array[j+1] = valoareTemporala
            } 
        }
    }
    return array
}
console.log("resultEx6V2 - bubbleV2: ", bubbleSortV2(resultEx6V2))

console.log("####################")