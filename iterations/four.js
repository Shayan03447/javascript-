const myobject={
    js:'javascript',
    cpp:"C++",
    rb:'ruby',
    swift:'swift by apple'
};
for (const key in myobject) {
   //console.log(`${key} shortcut is for ${myobject[key]}`)
}

const programming=["rb","java","cpp","swift"]
for (const key in programming) {
    //console.log(programming[key])  
}

const coding=["rb","cpp","java","swift"]
// coding.forEach(function (val){
//     console.log(val)
// })
// coding.forEach( (val)=>{
//     console.log(val)
// })
// coding.forEach( (items, index, arr)=>{
//     console.log(items, index, arr)
// })

const myCoding=[
    {
        languageName:"Javascript",
        fileName:"Js"
    },
    {
        languageName:"Java",
        fileName:"java"
    },
    {
        languageName:"python",
        fileName:"python"
    },
]
myCoding.forEach( (items)=>{
    //console.log(items.languageName)
})
const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums= myNums.filter( (nums)=>{
//     return nums>5
// })
// console.log(newNums);

const newNums=[]
myNums.forEach( (nums)=>{
    if(nums>5){
        newNums.push(nums)
    }
})
console.log(newNums)
