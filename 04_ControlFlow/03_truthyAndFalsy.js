// Falsy Values: -
// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values: - Except for falsy values, all others are truthy values.
// For example: "0", 'false', " ", [], {}, function(){}

// To check whether an array is empty of not

// const myArray = []
// if(myArray.length === 0){
//     console.log("Array is empty");
// }

// // To check whether an Object is empty or not
// const emptyObject = {}
// if(Object.keys(emptyObject).length===0){
//     console.log("Object is empty");
// }

// NULLISH COALESCING OPERATOR (??) : null undefined

let val1;
// val1 = 5??10
// val1 = null??10 
val1 = undefined??10
console.log(val1);

