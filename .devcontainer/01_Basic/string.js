const name = "saalim"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`hello my name is ${name} and my repo is ${repocount}`);


const gamename = new String('saalim-')

console.log(gamename[0]);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('l'));


const newSting = gamename.substring(0, 4)
console.log(newSting);

const anotherString = gamename.slice(-6, 3)
console.log(anotherString);

const newStingOne = "     saalim     "
console.log(newStingOne);
console.log(newStingOne.trim());

const url = "http://saalim.com/saalim1"

console.log(url.replace('1', '-'));

console.log(url.includes('momin'));

console.log(gamename.split('-'));