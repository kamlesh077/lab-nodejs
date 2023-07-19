let arr = [2,3,4]

arr.forEach(function (element, index, arr) {
    console.log(index, element, arr );
})

arr.forEach( (element,index,arr)  => {
    console.log( "Arrow:",index, element, arr);
});


const heros = ["naagraj","doga","dhruva","maniraj"]


heros.forEach((el)=> { console.log(el.toUpperCase());})

arr.map(function (element, index, arr) {
    console.log(element, index, arr);
})

heros.map((h) => { console.log(h.toUpperCase());})


// filter 
console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(herosWithRaj);


// Shopping Cart
const cartBill = [20,30,50,10]
const sumOfCartBill = cartBill.reduce((prev,curr) =>  prev+curr,0)
console.log(sumOfCartBill);


const gameScore = [200, 100, 310, 300, 250, 150]

//check if all values are numbers
console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
console.log("check: ", gameScoreCheck);

// find score above 200

const above200 = gameScore.find((score) => score > 200 )

console.log(above200);


// findIndex

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice' }
  ];
  
  const userIdToFind = 2;
  
  const userIndex = users.findIndex(user => user.id === userIdToFind);
  
  console.log("UserIndex:-",userIndex); // Output: 1 (index of the user object with id: 2)


// some
const num = [1, 2, 3, 4, 5];

// Check if at least one number is even
const hasEvenNumber = num.some(number => number % 2 === 0);

console.log(hasEvenNumber); // Output: true


const words = ['apple', 'banana', 'kiwi', 'orange'];

// Check if at least one word has a length greater than 5
const hasLongWord = words.some(word => word.length > 5);

console.log(hasLongWord); // Output: true


// sort

const fruits = ['banana', 'apple',"papaya", 'orange', 'kiwi'];

fruits.sort();

console.log(fruits); // Output: ['apple', 'banana', 'kiwi', 'orange']


const numbers = [5, 2, 10, 1, 8];

numbers.sort((a, b) => a - b);

console.log(numbers); // Output: [1, 2, 5, 8, 10]


const Numbers = [5, 2, 10, 1, 8];

Numbers.sort((a, b) => b - a);

console.log(Numbers); // Output: [1, 2, 5, 8, 10]

