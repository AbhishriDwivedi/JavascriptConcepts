// Three wAys 
// #1 - arr - []
let arr = [1,2,5,4,7];
console.log(arr);

let arr1 = arr;

arr = []; // we are emptying arr by pointing it to a new location which has empty array
console.log(arr); //Empty
console.log(arr1); // not empty 


// #2 - length = 0 
let arr2 = arr1;
arr1.length = 0; // internally using splice to empty array from the same memory address
console.log(arr1); // empty
console.log(arr2); // also empty since it points to the same memory location

// #3 - splice 
let array = [1,5,6,7,8,9];
console.log(array);

array.splice(0,array.length);
console.log(array);