// const tinderUser = new Object() //singleton 
const tinderUser = {}      //non singleton

tinderUser.id ="123"
tinderUser.name ="saalim"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email:"saalim@gmail.com",
    fullname: {
        username: {
            firstname:"saalim",
            lastname:"momin"
        }
    }
}

console.log(regularUser.fullname.username.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj4 = {5: "a", 6: "b"}
// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)
const obj3 = {...obj1, ...obj2}
console.log(obj3);


const users = [
    {

    },
    {
        id: 1,
        email: "saalim@.com"
    },
    {

    },
    {

    },
    {

    },
]


users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn`'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "saalim"
}

const {courseInstructure: Instructor} = course
console.log(Instructor);

