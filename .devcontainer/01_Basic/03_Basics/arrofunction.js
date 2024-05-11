const user = {
    username: "saalim",
    price: 199,

    welcomwMessage: function() {
        console.log(`${this.username}, welcome to websites`);
    }
}

// user.welcomwMessage()
// user.username = "sam"
// user.welcomwMessage()

console.log((this));


// function chai(){
//     let username = "saalim"
//     console.log((this.username));

// }

// chai()


// const chai = function chai (){
//     let username = "saalim"
//     console.log((this.username));

// }
// chai()

// const chai =  () => {
//     let username = "saalim"
//     console.log((this));

// }
// chai()

// const addTwo  = (num1, num2) => {
//     return num1 + num2
// }
//implicit return
// const addTwo  = (num1, num2) =>   num1 + num2

// const addTwo  = (num1, num2) =>   (num1 + num2)

const addTwo  = (num1, num2) =>  ({username: "saalim"})
console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
