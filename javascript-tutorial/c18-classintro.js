class Product {
    // properties -> variables -> data members
    name;
    price;
    #rating;

    constructor(n,p,r) {
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.#rating = r;
        //return 10; //if you're returning primitive then it will ignore/avoided in constructor
        //return {x:0, y:5} //if you return non primitive then it will be returned
    }

    // behaviours -> functions -> member functions
    display() {
        console.log("this refers to ",this);
        console.log("displaying the current product", this.name, this.price, this.#rating);
    }

    // Static methods  - static method are always called by class name
    static custom() {
        console.log("calling a static method");
    }

    // getter and setter 
    // by direct methods:- 
    getRating() {
        console.log(this.#rating);
    }
    setRating(r) {
        if (r < 0) return;
        this.#rating = r
    }
    // by using get and set keywords
    get getterRating() {
        console.log(this.#rating);
    }
    set setterRating(r) {
        if (r < 0) return;
        this.#rating = r
    }

}

// method 1
const p = new Product();   // new -> creates an empty plain object
// -> in the above piece of code we are "paranthesis -> ()" calling the constructor method
console.log(p);
p.display();
p.name = "samsung"
p.price = 19000
p.rating = 3.5
console.log(p);

// method 2 
const c = new Product("iphone",100000,5.0) //by using constructor
console.log(c);
c.display();

// calling static method with respect to class name 
Product.custom();

// setting values of private variables 
// p.setRating(10);
// p.getRating()

p.setterRating = 10
p.getterRating


