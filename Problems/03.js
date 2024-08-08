//find the largest number in an array
//@input: [1,-3, 5, 9, 0, 3, -4]
//@output: 9

function largestNumber(arr){
     let largestNumber = arr[0]
     arr.forEach(element => {
        if(element > largestNumber){
            largestNumber = element
        }
     });
     console.log(largestNumber);
  }

  largestNumber([124,-2,7,8,9])
