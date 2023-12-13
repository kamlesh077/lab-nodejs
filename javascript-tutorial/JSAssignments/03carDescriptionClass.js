// Create a class called Car with three properties: company, model, and year. The class should have a method
// called getDescription that returns a string in the format "This is a <year> <company> <model>". Instantiate an
// instance of the Car class and call the getDescription method.

class Car{
    company = "TATA"
    model = "Tiago"
    year = 2024

    
    company;
    model;
    year;
    
    // by constructor 
    constructor(c,m,y){
        this.company = c
        this.model = m
        this.year = y
    }
    getDescription(){
        return `This is year:${this.year}, company:${this.company }, model:${this.model}`
    }

    
}

// let myCar = new Car();
// console.log(myCar);

// by using constructor
let myCar2 = new Car('Jaguar', "Electric", 2026);
console.log(myCar2.getDescription());