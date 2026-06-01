// Problem no 1

const prompt = require('readline-sync');
/*
let a = prompt.question("Enter Your age: ");

if (a >10 && a < 20){
    console.log("Your age is between 10 and 20");
}
else{
    console.log("Your age is not between 10 and 20");
}
*/

// Problem no 2
/*
let age = prompt.question("Enter Your age: ");

age = Number.parseInt(age);

switch(age){
    case 12:
        console.log("Your age is 12");
        break;

    case 13:
        console.log("Your age is 13");
        break;

    case 14:
        console.log("Your age is 14");
        break;

    default:
        console.log("Your age is not specified");
}
*/

// Problem no 3
/*
let num = prompt.question("Enter Your number: ");
num = Number.parseInt(num); 

if (num%2 == 0 && num%3 == 0){
    console.log("Your number is divisible by 2 and 3");

}
else{
    console.log("Your number is not divisible by 2 and 3");
}
*/

// Problem no 5

let age = prompt.question("Enter Your age: ");

if (age > 18 || age <18){
    console.log(age >18? "You can drive": "You cannot drive");
}

