let obj = {id: 101, name:"rohit", salary:10000};   //object assigning

let emp = new Object();   // this is empty object declaring with "new" keyword
emp.id = 102;
emp.name = "kisna";
emp.salary = 10000;

console.log(obj);
console.log(emp);

function Emp(i,n,s) {
    this.id = i;
    this.name = n;
    this.salary = s;
}

const e = new Emp(103,"tata",100000);
console.log(e);

// fetching value
console.log(emp.id);
console.log(emp['name']);

// assigning new key value using dot operator or braces we can also update key value
emp.jobrole = "developer";
// emp['jobrole'] = "developer";

emp.id = 112
emp['name'] = "mr.patel";

delete emp.id;

console.log(emp);