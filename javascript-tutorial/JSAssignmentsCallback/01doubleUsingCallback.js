// 1. Double using callback.
// Write a function that takes in an array of integers and a callback function, and returns a new array where each
// element is doubled using the callback.

function doubleArray(Arr, callback) {
    const doubleArr = Arr.map((num) => {

        return callback(num)
    })
    return doubleArr
}

function callback(num) {
    return num * 2
}

let Arr = [2,3,4,5]

let result  = doubleArray(Arr, callback)
console.log(result);