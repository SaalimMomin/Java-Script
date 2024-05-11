function sayMyName() {
    console.log("s");
    console.log("a");
    console.log("a");
    console.log("l");
    console.log("i");
    console.log("m");
}

// sayMyName()

function addTwoNumber(number1, number2){ // parentheses
    let result = number1+ number2
    return result
}

const result = addTwoNumber(3, "4")  //arguments
console.log("Result: ", result);

function loginUserMessage(username = "sam") {
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just looged in`
}

// console.log(loginUserMessage(("saalim")));

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) { //imp
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));



const user = {
    username: "saalim",
    price: 199
}

function handleObject(anyobject){
    console.log(`user is ${anyobject.username} and price ${anyobject.price}`);
}

handleObject({
  username: "sam",
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecond(getArray){
    return getArray[1]
}