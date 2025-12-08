// local scope
let b=300

if (true){
    // block scope
    const a=2
    let b=3
    var c=5
  //  console.log(a)
}
//console.log(b)

function one(){
    //const username="Shayan"
    function two(){
        const website="spotify"
        //console.log(username)
    }
    two()
    //console.log(website)
}
one()

if (true){
    const username1="Airbridge"
    if (true){
        const website1="Slack"
        //console.log(`inner ${username1}`);
    }
    //console.log(website1)
}
if (true){
    const Student="Mike"
    if (Student==="Mike"){
        const marks=15
        //console.log(Student + marks)
    }
    //console.log(marks)

}
//console.log(Student)

// ***************Question**********
function addone(num){
    return num+1
}
// console.log(addone(5))
//  Expression 
const addthree=function (num){
    return num+3
}
console.log(addthree(5))