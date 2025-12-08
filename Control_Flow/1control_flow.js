const score=200
if (score > 100){
   // console.log("Execuated");
}

//if (score>100) console.log("Execuation");

//const balance=1000
// if (balance<500){
//     console.log("Less then 500")
// }else if(balance<750){
//     console.log("less then 750")
// }else if(balance>900){
//     console.log("less then 900")
// }else{
//     console.log("Less then 1200")
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if (userLoggedIn && debitCard){
    console.log("Allow for shopping");
}

if (loggedInFromGoogle || loggedInFromEmail){
    console.log("Allow to enter")
}
