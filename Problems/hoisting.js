// variables declared with var are hoisted, but only the declaration, not the assignment.
// variables declared with let and const are hoisted but not accessible before their declaration due to Temporal Dead Zone(TDZ)
// function declarations are fully hoisted, but function expressions are only partially hoisted

// undefined and not-defined are two different things

console.log(a);

var a = 0;
console.log(a);

