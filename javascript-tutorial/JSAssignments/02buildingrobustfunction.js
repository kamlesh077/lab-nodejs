// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.

function getPerson(person) {
    try {
        if (typeof person !== 'object' || person === null || !('name' in person) || !('age' in person)) {
            throw new Error('Invalid parameter type');
        }

        const { name, age } = person;
        return `Name: ${name}, Age: ${age}`;
    } catch (error) {
        return error.message;
    }
}

// Example usage:
const validPerson = {name:"Mithun", age: 20};
const invalidPerson = { name: 'Alice' };

console.log(getPerson(validPerson));  // Output: "Name: John, Age: 25"
console.log(getPerson(invalidPerson));  // Output: "Invalid parameter type"

