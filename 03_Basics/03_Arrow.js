const user = {
    username : "Abhishek",
    price : 999,

    welcomeMessage : function(){
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Abhishek Tiwari"
// user.welcomeMessage()
// console.log(this);

function js(){
    const user = "ABhishek"
    // console.log(this); //it will print different values when function will be called
    // console.log(this.user); //it will print undefined as this keyword will not work
}

js()

// const abhishek = function(){
//     // console.log(this); //it will print different values when function will be called
//     // console.log(this.user); //it will print undefined as this keyword will not work
// }


// const abhishek = () => {
//     const user = "Abhishek"
//     // console.log(this); 
//     console.log(this);
// }

// abhishek()


//     Explicit return
// const addTwoNum = (num1, num2){
//     return num1 + num2
// }

const addTwoNum = (num1, num2) => (num1+num2) // Implicit return (Returning values without using curly braces)

console.log(addTwoNum(10,6));