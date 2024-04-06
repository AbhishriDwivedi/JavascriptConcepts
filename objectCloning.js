// Objects in Javascript are reference types, hence we cannot clone them by using simpe '='.
// For example: 
let sourceObject = {value:10};
let destinationObject = sourceObject;
// doing so will make both sourceObject and destinationObject point to the same memroy location
// since it is reference type.

// So for creating a clone, we can do 1 of the 3 things listed below

//1. Iteration
let destinationObjectIterated = {}; // declare an empty object
for(let key in sourceObject){
    // iterate over all the keys in source object and assign them in destination object
    destinationObjectIterated.key = sourceObject[key];
}

//2.Assign
let destinationObjectAssigned = Object.assign({},sourceObject); // using Object.assign(dest,src);

//3.Spread
let destinationObjectSpread = {...sourceObject}; // by using three dots

// now let's verify by increasing the value and loggin it for each object
console.log('sourceObject: ',sourceObject);
sourceObject.value++;
console.log('destinationObject: ',destinationObject);
console.log('destinationObjectIterated: ',destinationObjectIterated);
console.log('destinationObjectAssigned: ',destinationObjectAssigned);
console.log('destinationObjectSpread: ',destinationObjectSpread);

