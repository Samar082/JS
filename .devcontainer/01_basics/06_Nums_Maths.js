const score = 400

const balance = new Number(100)

console.log(score)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 112.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// ******************** MAths **********************

// console.log(Math); // Math is a object
// console.log(Math.abs(-4)); // 44
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.2)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.min(2,3,1,6,7,8)); // 1
// console.log(Math.max(5,8,10,17)); // 17

console.log(Math.random()); // returns the value between 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

// if you want the value between 10 and 20

console.log(Math.floor(Math.random() * 10) + min)
