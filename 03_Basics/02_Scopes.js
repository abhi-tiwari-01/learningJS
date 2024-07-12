if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); //it would not print as it is block scoped
// console.log(b); // it will also not print
// console.log(c); 


function one(){
    const name = "Abhishek"
    function two(){
        const uid = "2682"
        // console.log(name);
    }
    // console.log(uid); // It cannot be accessed outside it's block declaration
    two()
}

one()


// ****************Interesting*************************

console.log(addOne(5))// function call will execute even though it is before definition
function addOne(num){
    return num+1
}

// console.log(addTwo(5)); // it will not run as the function is in a expression
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5)); // it will run