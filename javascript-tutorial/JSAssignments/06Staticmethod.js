// Create a class called Calculator with a static method called add. The add method should take two numbers as
// arguments and return their sum. Instantiate the Calculator class and call the add method.

class Calculator {
    static add(x, y) {
        return x + y 
    }
}

const sum = Calculator.add(5,5)

console.log(sum);

