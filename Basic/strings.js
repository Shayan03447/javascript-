const name="shayan"
const repoCount=50
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)

const gameName=new String('Shayan')
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.toLowerCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('n'))

const newString=gameName.substring(0,4)
// console.log(newString)
const anotherString=gameName.slice(-5,4)
// console.log(anotherString)
// Trim
const newStringOne="    Shayan    "
console.log(newStringOne)
console.log(newStringOne.trim()) 

const url="https://shayan.com/shayan%20ali"
console.log(url.replace("%20","-"))

const name1 = "shayan - ali - khan "
console.log(name1.split('-'))