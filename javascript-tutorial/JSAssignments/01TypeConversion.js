// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

function convertToNumber(strnum){
    try {
        let num = Number(strnum)
        if (Number.isNaN(num)) {
            throw new Error("Inavalid number")
        }
        return num;
    } catch (error) {
        return error.message;
    }
}

console.log(convertToNumber('132'));
console.log(convertToNumber('assd'));

