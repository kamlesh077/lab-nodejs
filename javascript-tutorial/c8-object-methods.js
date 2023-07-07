let emp = {
    id:101,
    name:"kamlesh patel",
    age:22
};

let keys = Object.keys(emp);
console.log(keys);

let values = Object.values(emp);
console.log(values);

let entries = Object.entries(emp);
console.log(entries);

// Object.freeze(emp);   // it dont allow to update nor add new key
Object.seal(emp);   // it allows object to update values but not adds new key


emp.address = "random";
emp.id = 111;
console.log(emp);


let obj2 = Object.assign({x:10},emp);   // passing all key values in new object
console.log(obj2);



// -----------------------------------practice set-------------------
var sum=0;

var arr = [10,15,20,30];  

arr.forEach(function myFunction(element) 

{  

     sum= sum+element;  

});  
console.log(sum);   // op = 75

var values1=["one","two","Three"];  

var ans=values1.shift();   //removes first element of array and return it

console.log(ans);

