// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person {
    name;
    age;

    constructor (name = "Unknown", age = 0){
        this.name = name
        this.age = age
    }

    getDetails(){
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const p1 = new Person ("Kamlesh", 20)
console.log(p1.getDetails());

const p2 = new Person ();
console.log(p2.getDetails());