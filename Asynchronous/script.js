//ASYNC code example
//things run asynchronously


console.log("i");
console.log("eat");
console.log("ice cream");
/*
//example 2
const a = 10;
const b = 20;
console.log(a)
console.log(b)
console.log(a+b)
*/

setTimeout(()=>{
    console.log("eat") //nummer 3
}, 3000) //millisekund
console.log("ice cream") // nummer 2