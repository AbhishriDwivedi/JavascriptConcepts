let person = {
    firstName : "Abhishri",
    lastName : "Dwivedi",

    // Getter
    get fullName()
    {
        return person.firstName + " " + person.lastName;
    },

    // Setter
    set fullName(value)
    {
        let name = value.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
    }
}

console.log(person.fullName);
person.fullName = "Ramya Dwivedi";
console.log(person.fullName);
