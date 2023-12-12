let myHeros = ["thor","hanuman"]
let dcHeros = ["batman", "flash", "superman"]

let heroPower = {
    thor: "hammer",
    hanuman: "Fly",

    gethanumanPower: function () {
        console.log(`Hanuman power is ${this.hanuman}`);
    }
} 

Object.prototype.kamlesh = function(){
    console.log(`Kamlesh is present in all objects`);
}

console.log(myHeros.kamlesh());  // Array has access of object  kamlesh()
console.log(heroPower.kamlesh());  // And object also has access of object kamlesh() 

// giving access to array only
Array.prototype.heykamlesh = function(){
    console.log(`Kamlesh says HI`);
}

console.log(myHeros.heykamlesh());
//console.log(heroPower.heykamlesh()); // it will not print heropower bcoz its an object

// inheritance
const User = {
    name: "top name",
    email: "top@gmail.com"
}

const Teacher = {
    makeVideos: true 
}

const TeachingSupport = {
    isAvailable: false
}

const TAAssistance = {
    makeAssignment: "JS Assignment",
    fulltime: true,
    __proto__: TeachingSupport  // this is classical way for inheritance , inherit inside
} 
console.log(TAAssistance.isAvailable); 

Teacher.__proto__ = User  //inherit outside of object
console.log(Teacher.name);


// Modern way to inherit properties of object :-
obj = Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(obj.isAvailable,"&", obj.makeVideos);  // inherited


String.prototype.truelength = function(){
    console.log(`True lenghth is ${this.trim().length}`);
}
"hitesh    ".truelength()
"kamlesh.    ".truelength()