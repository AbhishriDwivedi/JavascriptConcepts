let arr = [1,2,3,4,5,6];
console.log(arr);


let newArray = arr.slice(); // also a way of creating copy
console.log(newArray);

newArray = arr.slice(0, -1); 
console.log(newArray);

newArray = arr.slice(2,5); // from index 2 to 4
console.log(newArray);