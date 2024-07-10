const myArr = [1, 2, 3, 4, 5, 6];
// console.log(myArr[3]);

/*
Shallow Copy: A shallow copy of an object is a copy whose properties share the same references 
(point to the same underlying values) as those of the source object from which the copy was made.

Deep Copy: A deep copy of an object is a copy whose properties do not share the same references 
(point to the same underlying values) as those of the source object from which the copy was made. 

----- Shallow Copy ---- Refers to original position of array
----- Deep Copy ----- Doesn't refer to original location of the array
*/

// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

/*
push(arg) - add at last of the array
pop() - removes from last of the array
unshift(arg) - adds at the start of the array
shift() - removes from the start of the array
*/

// const arrOne = myArr.join(); 
//join() - Adds all the elements of an array into a string, 
//separated by the specified separator string.
// console.log(arrOne);
// console.log(typeof arrOne);

//  slice and splice

console.log("A ", myArr);

const mna1 = myArr.slice(1,3)
console.log("B ", myArr);
console.log(mna1);

const mna2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(mna2);

// Diff bet slice() and splice() -  slice doesn't manpulates the original array but splice does