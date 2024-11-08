// primitive value -- jiska real copy hoo jaye...
var a = 12;
var b = a; 
b++;
console.log(a); // 12
console.log(b); // 13


// reference value -- real copy nhi hoga balki us main value ka reference pass hoga
var c = [12, 13];
var d = c;
d.pop();
console.log(c); // [ 12 ]
console.log(d); // [ 12 ]

// S0 how can we do the real copy?? matlab, how can we copy reference values??

var e = [1, 2, 3, 4];
var f = [...e]; // spread operator
e.pop();
console.log(e); // [ 1, 2, 3 ]
console.log(f); // [ 1, 2, 3, 4 ]


