const prompt = require('readline-sync');

let a = prompt.question("What's your age: ");
a = Number.parseInt(a); // It will convert string into number
console.log(typeof a);

if (a < 0){
    console.log("Your age is invalid");
}
else if (a <18){
    console.log("You are a minor and you cannot drive");
}
else if (a >= 18 && a <= 120){
    console.log("You are an adult and you can drive");
}

console.log("You can ", a < 18 ? "not drive" : "drive"); // Conditional expression (Ternary operator)



