/*
There are two ways to declare objects: -
1. Literal - not singleton
2. Constructor - singleton
*/
//Constructor method
// Object.create

//Object Literal

// adding symbol
const mySym = Symbol("mySymbol")
const jsUser = {
    name : "Abhishek",
    "full name" : "Abhishek Tiwari",
    [mySym] : "My Symbol", // symbol in object is added by making the key under square brackets []
    uid : "21BCS2682",
    age : 18,
    email :"abhishek.rdjr@gmail.com",
    isLoggedIn : false
}

//Accessing the object

// console.log(jsUser.name);
// console.log(jsUser["full name"]); // it can't be accessed using .(dot) operator
// console.log(jsUser[mySym]); // Symbol is accessed using square brackets []
// console.log(typeof mySym);

//Freezing the object

// jsUser.uid = "2682"
// Object.freeze(jsUser)
// jsUser.uid = "2711"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello User");
}
jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this["full name"]}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());