//1. Id manipulation
let elementExample = document.getElementById('example')

//2. Class manipulation
let titles = document.getElementsByClassName('title')   //titles is an array
//a)
console.log(Array.isArray(titles));                 //false
console.log(Array.isArray(Array.from(titles)));     //true
//b)
titles.forEach( function (item){
    console.log(item);
});

//3. Querry Selector

