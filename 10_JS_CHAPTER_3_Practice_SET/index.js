const prompt = require('readline-sync');

// Question : 1

let marks = {
    Kalyanam : 90,
    Shreya : 80,
    Anshul : 85,
    Priya : 90,
    Rohit : 85
}

for (let i = 0; i< Object.keys(marks).length; i++){
    console.log("Marks of " + Object.keys(marks)[i] + " is : " + marks[Object.keys(marks)[i]]);

}
// Question : 2

for (let key in marks){
    console.log("Marks of "+ key + " is : "+ marks[key]);
}

// Question : 3
/*
let num = 4
let i

while (i != num){
    i = prompt.question("Enter a number: ");
}
console.log("You entered the correct number!");
*/

// Question : 4

const mean = (a , b , c ,d) =>{
    return (a + b + c + d)/4;
}

console.log(mean(6 , 7 , 56 , 34));



