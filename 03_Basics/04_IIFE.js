// Immediately Invoked Function Expression (IIFE)
// (function test(){
//     console.log("Testing IIFE");
// })();

// ( () => {
//     console.log("Testing is successfull");
// })(); 

/*
JavaScript Execution Context: -
1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context
*/
//  EXAMPLE CODE: -
const val1 = 10
const val2 = 5
function addNum(num1, num2){
    const total = num1 + num2
    return total
}
const result1 = addNum(val1, val2)
const result2 = addNum(5,2)

/*
Steps in which the code will run: -
1. Global Execution (Environment)   ----- this
2. Memory Creation Phase: -
--- val1 = undefined
--- val2 = undefined
--- addNum = definition
--- result1 = undefined
--- result2 = undefined
3. Execution Phase: -
--- 10 => val1
--- 5 => val2
--- addNum ------ [ new variable environment + execution thread ]
----------------- Memory Phase: -
----------------- val1 = undefined
----------------- val2 = undefined
----------------- total = undefined
----------------- Execution Context: -
----------------- num1 = 10
----------------- num2 = 5
----------------- total = 15
--- result1 = 15
--- addNum ------ [ new variable environment + execution thread ]
----------------- Memory Phase: -
----------------- val1 = undefined
----------------- val2 = undefined
----------------- total = undefined
----------------- Execution Context: -
----------------- num1 = 5
----------------- num2 = 2
----------------- total = 7
--- result2 = 7
*/

// Callstack follows LIFO principle