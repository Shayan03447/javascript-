const candidate={
    Name:"Shayan",
    Company:"Airbridge",
    Role:"Internship",
    
    welcomeMessage:function(){
        //console.log(`${this.Name}, Welcome to the ${this.Company} as an role of ${this.Role}`)
        //console.log(this)
    }
}
//candidate.welcomeMessage()
//candidate.Name="Sam"
//candidate.welcomeMessage()
//console.log(this )

function four(){
    const username="Ali"
    //console.log(this.username)
}
four()

// Simple function
// const company= function (num1,num2){
//     return num1+num2

// }
// console.log(company(4,5))

// Simple Arrow Function
const company=(num1,num2)=>{
    return num1+num2
}
//console.log(company(6,2))

// i mplicit return we cannot use the paraenthis
//const project=(num1,num2) => num1+num2
const project=(num1,num2) => num1+num2
//console.log(project(2,4))

