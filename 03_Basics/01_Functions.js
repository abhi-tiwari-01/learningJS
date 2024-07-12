// function sayMyName(){
//     console.log("Abhishek");
// }

// sayMyName();


// function add2Nums(a, b){
//     console.log(a+b);
// }
function add2Nums(a, b){
    return (a+b);
}

// const result = add2Nums(10, 20);
// console.log(result);

// function calculateCartPrice(...num){
//     return num;
// }

// console.log(calculateCartPrice(10, 100, 1000));

function calculateCartPrice(val1, val2, ...num){ //leftout args will be stored in ...num
    return num;
}

// console.log(calculateCartPrice(10, 100, 1000, 10000, 500, 50000));

const user = {
    name: "Abhishek",
    uid : "21BCS2682"
}

function handleObject(anyObject){
    console.log(`User ID is ${anyObject.uid} and name is ${anyObject.name}`);
}

handleObject(user)


const myNewArray = [1, 2, 3, 4, 5]

function handleArray(arrayElement){
    console.log(`myNewArray contains: ${arrayElement[2]}`);
}

handleArray(myNewArray)