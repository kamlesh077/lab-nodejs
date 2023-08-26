////////////////////////////////////////////////////////////////////////////////////////////////////
// SPREAD
const oneArray = [1,2,3,4]
const twoArray = [5,6,7,8]

const threeArray = oneArray.concat(twoArray)
// const threeArray = [oneArray,twoArray]

// const threeArray = [...oneArray,...twoArray]       //spread operator
// console.log(threeArray);



////////////////////////////////////////////////////////////////////////////////////////////////////
// REST

function manyArguments(){
    console.log(typeof arguments);
    let args = Array.from(arguments)
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

function manyArguments2(...args) {    // rest operator converts directly to array 
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}

// manyArguments(1,2,3)
// manyArguments(1,2,3,4,5,6,7)
// manyArguments2(1,2,3,4,5,6,7,8,9)



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["superman", "flash"]
const newNames = ["Batman",...names,"thor"]
console.log(newNames);

const sitename = "pwskills"
console.log([...sitename]);

function pwskills(...values) {
    return values
}

console.log(typeof(pwskills("superman","flash","spiderman")));
console.log(pwskills("superman","flash","spiderman"));

