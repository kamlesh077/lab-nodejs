// Arrays in js

// Storing data in array
// let a = [1,2,3,4,"Kamlesh",false , true, 500]
// console.log(a);

// b = new Array("abc", "def", 55,66,77,true)
// console.log(b);


//Accessing array 
/*
given array -> [11,21,31,41,51]
indexes/pos -> [0, 1, 2, 3, 4]  // last element index = arr.length - 1
*/


// console.log(a[4])
// //updation
// a[4] = 'patel'
// console.log(a);



// arrays method
// let arr = [1,2,3,4,5];
// arr.push(6,7);
// console.log(arr);

// arr.pop()
// console.log(arr);

// let c = arr.shift();
// console.log(c);
// console.log(arr);

// let d = arr.unshift(9);
// console.log(arr);

//-----------------------------
let a1 = [1,2,3,4,5];
let a2 = [3,4,5];
let a3 = a1.concat(a2);
// console.log(a1,a2,a3);

// let s = a3.join("#");
// console.log(s);

// a3.reverse();
// console.log(a3);

console.log(a3.indexOf(1));


// let arr1 = [1,2,3,4,5,6,7,8,9];
// console.log(arr1.slice(2,6));

// arr1.splice(4,0,99);
// console.log(arr1);