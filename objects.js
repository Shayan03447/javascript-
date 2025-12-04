//  Two ways to declear the objects like a litrals, or like a constructor
// Object declartion
const sym=Symbol("key1")
const person={
    "name":"Shayan",
    age:24,
    email:"123@gmail.com",
    [sym]:"key1",
    location:"lahore",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
// How to access the object
//console.log(typeof person.sym)
//console.log(person["email"])
// how to change the value of any key
//person.age=25;
//console.log(person)
// How to freeze the object
//Object.freeze(person)
//person.name="ali"
//console.log(person)

person.greeting=function(){
    console.log("hellow js user")
}
console.log(person.greeting())

person.greetingtwo=function(){
    console.log(`hello js user, ${this.age}`)
}
console.log(person.greetingtwo())
