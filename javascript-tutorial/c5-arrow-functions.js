// 1. One parameter, and a single return statement
const square = x => x * x;
// 2. Multiple parameters, and a single return expression
const sumOftwoNumbers = (x, y) => x + y;
// 3. Multiple statements in function expression
const sum = (x, y) => {
console.log(`Adding ${x} and ${y}`);
return x + y;
};
// 4. Returning an object
const sumAndDifference = (x, y) => ({ sum: x + y, difference: x - y });


// CALLING A FUNCTION
let output1 = square(5); // OUTPUT: 25
console.log(output1);
let output2 = sumOftwoNumbers(1, 2); // OUTPUT: 3
console.log(output2);
let output3 = sum(1, 3);
/*
OUTPUT: Adding 1 and 2
3
*/
console.log(output3);
let output4 = sumAndDifference(5, 3); // OUTPUT: { sum: 8, difference: 2 }
console.log(output4);