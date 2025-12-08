// simple function
//function chai(){
  //  console.log("DB connected")
//}
//chai()

// IIFE Immediately Invoked Function Expression
// problem is created by the global scope polluction. we use iife to reduct the declaration of global scope polluction
(function chai(){
    //console.log("DB Connected")
})();
//console.log(( (num1,num2) => {
 //   return num1+num2
//})(5,3));

let value1=10
let value2=2
function addnum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addnum(value1,value2)
let result2=addnum(10,2)