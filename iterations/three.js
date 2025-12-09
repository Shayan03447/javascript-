
// forof
const arr=[1,2,3,4,5,6,7]
for (const value of arr) {
    //console.log(value) 
}
const name="Shayan"
for (const char of name) {
    //console.log(char)
    
}
// for in 
const person={
    name:"Shayan",
    rollnumber:123,
    email:"shayan123@gmail.com"
};
for (const key in person) {
    //console.log(key,person[key])
}

// Maps are for the unique values
const map=new Map()
map.set('PAK','Pakistan')
map.set('IN','India')
map.set('USA','United State Of America')
map.set('Fr','Farce')
map.set('Fr','France')
//console.log(map)
// [] destructure of array
for (const [key,value] of map) {
    console.log(key, ':-', value)
    
}