let emptySet = new Set()

// console.log(emptySet.size);

//Set stores unique values

let myArray = [1,2,3,4,5,6,2,3]
// let newSet  = new Set(myArray)
let newSet  = new Set([...myArray])    // spread operator
// console.log(newSet);

newSet.add(7)
// console.log(newSet.has(7));

newSet.clear()
// console.log(newSet);


// Set difference

function setDifference(setA,setB) {
    // return new Set([...setA].filter(el => !setB.has(el)))
    return new Set([...setA].filter(el => setB.has(el)))
}

let A = new Set([1,2,3,4,5,6])
let B = new Set([5,9,7,5,3,6])
// console.log(setDifference(A,B)); 

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let map = new Map()

console.log(map.size);

let arr = [
    [1,"kamlesh"],
    [2,"Raj"],
    [3,"OM"],
    [4,"Vijay"]
    [5,"Shivam"]
]

function Mapname(arr){
return new Map(arr.map((arrayItem) => Map.Set([arrayItem[0], arrayItem[1]])))
}
//   function Mapname(arr) {
//     let map = new Map(arr.map((arrayItem) => [arrayItem[0], arrayItem[1]]));
//     return map;
//   }
  
  console.log(Mapname(arr));
  