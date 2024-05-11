//var c = 300  //global scope

if(true){
let a = 10
const b = 50     //block scope
console.log("INNER: ", a );
}

// for (let i=0; i< array.length; i++) {
//     const element = array[i];
// }


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "saalim"

    function two(){
        const websites = "youtube"
        console.log(username);
    }
    // console.log(websites);

    two()
}

one()

if(true) {
    const username = "salim"
    if (username ===  "salim") {
        const websites = "youtube"
      
        console.log(username + websites)
    }
    // console.log(websites);
}


addOne(5)
function addOne(num) {   //not error
    return num + 1
}


// addTwo(5)
// const addTwo = function(num) { //error
//     return num +2
// }

// console.log(username);