// const myNumber=[1,2,3,4,5,6,7]
// const newNumber=myNumber.map( (num)=>{return num+10})
// console.log(newNumber)

const myNumber=[1,2,3,4,5,6,7,8,9]
const newNumber=myNumber
.map( (nums)=> {return nums*10})
.map( (nums)=>{return nums+1})
.filter( (nums)=>{return nums>=20})
console.log(newNumber)