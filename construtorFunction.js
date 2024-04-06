function Employee(name,age,colony,street) {
    this.name = name;
    this.age = age; // use =

    this.address = {
        street,
        colony,
    }
}
// no return statement
let emp1 = new Employee("Harshit Devda",69,"L.Lasan"); // use new keyword
console.log(emp1.name);
console.log(emp1.address.colony);