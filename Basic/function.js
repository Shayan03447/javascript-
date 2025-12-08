// function addTwoNumber(a,b){
//     return a+b
// }
// console.log(addTwoNumber(2,5))

// function calculation(a,b){
//     //let result=a+b
//     return a+b
// }
// let result=calculation(3,5)
// console.log("Result", result)

function loginUserMessage(username){
    if (username===undefined){
        //console.log(`please enter the username`);
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Shayan"))

// How to add multiple values in 
// We use rest and spread operator
function calculateCartPrice(value1, value2, value3,...num1){
    return num1
}
// console.log(calculateCartPrice(2,3,4,5,6,7,8,9))

// object with person (Type checking is important)
const person={
    name:"shayan",
    userId:112233
}
function handleobject(anyobject){
   // console.log(`Username is ${anyobject.name} and price is ${anyobject.userId}`)
}
//handleobject(person)

//  Function with object
const myNewArray=[100,200,300,400]

function returnSecondValue(getarray){
    return getarray[2]
}
//console.log(returnSecondValue(myNewArray))
const obj={
    roomNumber : 4 ,
    department : "CS",
}
function getObject(Objectpropertise){
    //console.log(`In university ${Objectpropertise.roomNumber} is Roomnumber and department is ${Objectpropertise.department}`)
}
//getObject(obj)
//const Array1=[300,400,500,600]

function returnFirstValue(getArray1){
    return getArray1[3]
}
console.log(returnFirstValue([200,300,400,500]))