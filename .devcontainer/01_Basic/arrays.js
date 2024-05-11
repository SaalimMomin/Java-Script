//array

const myArr = [0, 1, 2 , 3 ,4, 5, 6]
const myHeros = ["salman", "srk"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2[2]);

// myArr.unshift(9)
// myArr.shift()


// console.log(myArr.indexOf(3));
// console.log(myArr.includes(9));


const newArr = myArr.join()

// console.log(myArr);
// console.log(typeof newArr);

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)

console.log(myn1);
console.log("c", myArr);