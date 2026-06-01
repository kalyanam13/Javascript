// Print to add first n natural numbers

const prompt = require('readline-sync');
/*
let n = prompt.question("Enter a number: ");
n = Number.parseInt(n);
let sum = 0;
for (let i= 1 ; i<=n; i++){
    sum += i;
}
console.log("The first " + n + " natural numbers add up to: " + sum);
*/

// for-in loop

let obj = {
    "Sam":56,
    "Hohn":45,
    "Rohit":67,
    "Suresh":78,
    "Riya":23
}

// for-in loop
for (let a in obj){
    console.log("The marks of "+ a + " is :" + obj[a]);

}

// for-of loop

for (let a of "Rohit"){
    console.log(a);

}

