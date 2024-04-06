let arr = [1,2,4,5,6];
// we use reduce for finding sum of an array, second parameter is the starting value
let sum = arr.reduce((totalSum,val) => totalSum + val,0);
console.log(sum);