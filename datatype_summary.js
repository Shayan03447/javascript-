// Premitive datatype
// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

// Reference (Non Premitive)
//  Array, object, functions

const Array1= ["Shayan", "Ali", "Ahmad"];
const person = {
    name: "shayan",
    age: 22
};
const id = Symbol('123')
const anotherId =  Symbol('112233')
// console.log(typeof id);
// console.log(typeof anotherId)

let name="shayan"
let anotherName=name;
anotherName="Ali"
//console.log(name);
//console.log(anotherName) // this is call stack memory

let userone={
    email:"ali123@gmail.com",
    upi:"ali@upi"
}
let usertwo=userone;
usertwo.email="shayan123@gmail.com"
console.log(userone.email)
console.log(usertwo.email)