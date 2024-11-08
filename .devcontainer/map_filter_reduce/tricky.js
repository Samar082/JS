// there will be an array of objects
const users = [
    {firstName: "samar", lastName: "mahato", age: 21},
    {firstName: "rajib", lastName: "mahato", age: 22},
    {firstName: "soumen", lastName: "mahato", age: 22},
    {firstName: "abhijit", lastName: "mahato", age: 23},
];

// output will be like this: {21 : 1, 22 : 2, 23 : 1}

const output = users.reduce(function(acc, curr) {
      if(acc[curr.age]){
           acc[curr.age]++;
      }else{
           acc[curr.age] = 1;
           console.log(acc[curr.age]);
      }
      return acc;
}, {});
console.log(output);
