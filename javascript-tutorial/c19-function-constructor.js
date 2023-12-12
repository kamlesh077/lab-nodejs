function Product (n, p, r) {
    this.name = n;
    this.price = p;
    this.rating = r;
}

const p = new Product("LG",50000,5);
console.log(p);

let x = {
    p: Product
};

x.p("airpods", 2000, 5)
console.log(x);


/**
 * 1. this keyword in js is diff than other languages
 * 2. this keyword refers to the context from where we called
 * 
 * in the function constructor also
 * -- if you return the primitive it is ignored and we return the object referred by this
 * -- if you return a custom obj, then the custom obj is returned
 * -- if you don't return anything, then object referred by this is returned  
 */