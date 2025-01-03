var name = "mildred";
name = "zoe";
console.log(name);

let subject = 'javascript';
subject = 'python';
console.log(subject);

const number = 47.8;
// number = 48;
console.log(number);

// =====================
// string
let alert = "make sure you commit your changes to github everyday, Okay??";
console.log(alert);

// == boolean
let isShowing = true;
console.log(isShowing)

// === undefined
let items;
console.log(items);

//  null
let belongings = null; 
console.log(belongings)

//  symbol
let id = Symbol('id');
console.log(id);

// == bigint
let bigNumbers = 123456789009854n;
console.log(bigNumbers)

// Practice Type Conversion

// converting using Number()

console.log(Number("365"));  //  this convert a string to Numbers

console.log(String(366))//  this convert a numbers to string

console.log(Boolean(1))  //  if the boolean value here is 0 it will show false but is the number is greater than 0 it shows true
console.log(Boolean(365)) // this one is true because the number is greater than 1


// =============== practice area

let person = prompt("What is your name??...");
let age = prompt('What is your age?? ...');
alert(`Hello, ${person}! you are ${age} year old`)