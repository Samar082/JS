// there will be an array of objects
const users = [
    {firstName: "samar", lastName: "mahato", age: 31},
    {firstName: "rajib", lastName: "mahato", age: 22},
    {firstName: "soumen", lastName: "mahato", age: 22},
    {firstName: "abhijit", lastName: "mahato", age: 53},
];

// output will be those first name whose age<30
// ["rajib, "soumen"]

//const output = users.filter( (x) => x.age<30 ).map((x) => x.firstName);

//console.log(output);

// try the same problem using reduce method
index = 0;
const output = users.reduce(function(acc, curr){
        
        if(curr.age < 30){
            acc[index] = curr.firstName;
            index++; 
        }
        return acc;
}, []);

console.log(output);
