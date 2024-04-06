// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Abhishri'
    }
    ,
    {
        No : 2,
        Name : 'Ramya'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Abhishri "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Abhishri");
console.log(obj);