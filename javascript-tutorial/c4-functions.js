// function greet () {
//     console.log("Hi there");
//     console.log("how are you");
// }
// greet();


// function sqr(x) {  // x -> parameter
//     // console.log(x*x);
//     return x*x;
// }

// let a = sqr(8); // 8-> arguments
// console.log(a);


// //default parameters in function
// function add(x,y=10) {   //arguments is assigned in left to right direction , assign default  value from right to left
//     return x + y;
// }
// console.log(add(1));


// function with unlimited number of parameters 
// function declaration

// function sumOfAllParameters() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) 
//     sum += arguments[i];
//     return sum;
// } 


// //function call
// let result = sumOfAllParameters(1,2,3,4,5);
// console.log(result);


// arrow function
//1. 1 parameter and single return statement
// const square = (x) => x * x;

// // 2. Multiple parameter , and single return expression
// const sumOftwoParameters = (x,y) => x + y;

// // 3. Multiple statements in function expression
// const sum =(x,y) => {
//     console.log(`Adding ${x} and ${y}`);
//     return x+y;
// }

// //4. Returning an object
// const sumAndDifference = (x,y) => ({sum: x+y, difference: x-y});


// calling funtion
// let output1 = square(5);
// let output2 = sumOftwoParameters(1,2);
// let output3 = sum(1,2);
// let output4 = sumAndDifference(5,3);