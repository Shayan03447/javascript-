// for (let i = 0; i < 10; i++) {
//     const element = index;
//     console.log(element)
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop ${i}`);
//     for (let j = 0; j <=10 ; j++) {
//         console.log(`outer loop is ${j}`);
        
//     }
    
// }

// const myArray=["Superman","Spiderman","Flash","Batman"]

// for (let i = 0; i <= myArray.length; i++) {
//     const element = myArray[i];
//     console.log(element)
    
// }

// Break
for (let index = 1; index <= 20; index++) {
    if (index==5){
        //console.log(`Detected 5`)
        break
    }
    //console.log(`Value of i is ${index}`) 
}
// Continue
for (let index = 2; index < 20; index++) {
    if (index==6){
        console.log("Detected 6")
        continue
    }
    console.log(`the value of i is ${index}`);
}