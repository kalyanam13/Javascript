const prompt = require('readline-sync');

// Problem 1
/*
let arr = [1 , 15 , 16 , 23  , 42 , 81];
let num = prompt.questionInt("Enter the number : ");

num = Number.parseInt(num);
arr.push(num);

console.log(arr);
*/

// Problem 2
/*
let arr2 = [1 , 15 , 16 , 23  , 42 , 81];
let a ;
do {
    a = prompt.questionInt("Enter the number : ");
    a = Number.parseInt(a);
    arr2.push(a);
}while(a != 0);

console.log(arr2);
*/

// Problem 3
/*
let arr3 = [1 , 10 , 50 , 70 , 85 , 90 , 112 , 120];
let n = arr3.filter((x)=>{
    return x%10 == 0;
})

console.log("The given number is divisible by 10 are :",n);
*/

// Problem 4
/*
let arr4 = [1 , 2 , 3 , 4 , 5 , 6];
let power = arr4.map((x)=>{
    return x*x;
});

console.log(power);
*/

// Problem 5

let arr5 = [1 , 2 , 3 , 4 , 5];
let facto = arr5.reduce((x1 , x2)=>{
    return x1*x2;
});

console.log(facto);







