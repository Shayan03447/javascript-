// How to create the empty object
const tinderuser=new Object() // singletan Object
//console.log(tinderuser) 

const tinder={} // Non-Singleton object
//console.log(tinder)

const person={}
person.id=223344
person.name="Shayan"
person.isLoggedIn=true
person.email="Shayan123@gmail.com"
//console.log(person)

const regularuser={
    email:"Shayan@123gmail.com",
    fullname:{
        userFullName:{
            firstName:"Shayan",
            lastName:"Ali"
        }
    },
    idDetails:{
        id:2233,
        marks:23
    }
}
//console.log(regularuser.fullname.userFullName.lastName)

//  How to combine two objects
const object1={
    1:"a",
    2:"b"
}
const object2={
    3:"c",
    4:"d"
}
const object4={
    5:"e",
    6:"f"
}
//const object3=Object.assign({} ,object1,object2,object4)
//console.log(object3)
//Spread Method 
const object3={...object1,...object2,...object4}
//console.log(object3)

// When the values come from DataBase

const user=[
    {
        
    },
    {
        email:"Shayan123@gmail.com"
    },
    {

    }
]
//console.log(user[1].email)
//console.log(person)
//console.log(Object.keys(person))

//How to destructure the values from object
const course={
    courseName: "javascript",
    price: "free",
    courseInstructure:"Suja"
}
const {courseInstructure}=course
console.log(courseInstructure)