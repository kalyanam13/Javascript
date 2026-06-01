const prompt = require('readline-sync');
/*
let n = prompt.question("Enter a number: ");
n = Number.parseInt(n);

let i = 1;
while (i < n){
    console.log(i);
    i++;
}
*/

let n = prompt.question("Enter a number: ");
n = Number.parseInt(n);

let i = 10;
do{
    console.log(i);
    i++;
}while(i < n)

