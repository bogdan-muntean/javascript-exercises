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
var studentEx2 = {
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


//iau obj, extrag keys si valori