//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

const id = Symbol ('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 322184774584n

// Refferece (Non - primitive)


// Array , Object, Functions



const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "saalim",
    age: 23,
}

const myFunction = function() {
    console.log("hello");
}

console.log(typeof scoreValue);




let myYoutubeName = "starvideo"

let anothername = myYoutubeName
anothername = "saalim"

console.log(myYoutubeName);
console.log(anothername);


let userOne = {
    email: "user@gamil.com",
    upi: "userupi@"
}

let userTwo = userOne

userTwo.email = "saalim@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);