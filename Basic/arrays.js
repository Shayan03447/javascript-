// const myarray=[1,2,3,4,5,6,7]
// console.log(myarray[1])
// const myarray1=["shayan","ali", "ahmad"]
// console.log(myarray1[2])
// const myarray2=new Array("shayan","ali","ahmad")
// console.log(myarray2)
// // *************Arrays methods
// myarray1.push("salman")
// console.log(myarray1)
// myarray2.push("kashif")
// console.log(myarray2)
// myarray1.pop()  Remove last elementof array
// console.log(myarray1)
const myarray=[0,1,2,3,4,5,6,7]
// myarray.unshift(0)  
// myarray.shift() remove the element from start
// console.log(myarray.includes(6)) value exist or not exist
// console.log(myarray.indexOf(9))
// console.log(myarray)
// const newarray=myarray.join()
// console.log(myarray)
// console.log(typeof newarray)


// console.log("A", myarray)
// const myn1=myarray.slice(1,4)
// console.log(myn1)
// console.log("B", myarray)
// const myn2=myarray.splice(1,5)
// console.log(myn2)

// Difference between push  and concat operations in javascript

// const myarr=[1,2,3,4,5,6,7,8]
// myarr.push(9)
// console.log(myarr)

const myarr1=[1,2,3,4,5,6,7,8]
const myarr2=[9,10,11,12,13,14]
//const finalArr=[...myarr1,...myarr2] spread operator
//console.log(finalArr)
// const finalArr=myarr1.concat(myarr2)
// console.log(finalArr)


const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
const finalArr=marvel_heros.concat(dc_heros)
//const all_heros=[...marvel_heros,...dc_heros]
//console.log(finalArr)
const newArray=[1,2,3,4,[2,3,5,6],8,9,[2,3,6,7,[2,3,4,5]]]
const realArray=newArray.flat(Infinity)
//console.log(realArray)

//  Create an array
//console.log(Array.isArray("Shayan"))
//console.log(Array.from("Shayan"))
// Of an object
let score1=100
let score2=200
let score3=300
//console.log(Array.of(score1,score2,score3))

const cars=["volvo","bmw","audi"]
const len=cars.length
//console.log(len)

// array with loops 
const fruits=["apple","bannan","cheery","mango"]
const flen=fruits.length
for (let i=0; i<flen;i++){
    
}