// Some more Array Methods
/*
let num = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10];
let num2 = [11 , 12 , 13 , 14 , 15 , 16 , 17 , 18 , 19 , 20];

let newArray = num.concat(num2);
console.log(newArray);

console.log(num , num2);
*/
//console.log(num);

//delete num[0];
//console.log(num);

// Sort
/*
let compare = (a , b) => {
    return a - b;
}

let num = [123 , 12 , 43 , 455 , 65 , 61 , 17 , 88 , 9 , 110];
num.sort(compare);

console.log(num);// Sorts in numerical order
*/

// Splice and Slice

let num = [123 , 12 , 43 , 455 , 65 , 61 , 17 , 88 , 9 , 110];

//num.splice(2 , 3 , 1000 , 2000 , 3000);
//console.log(num);

let newArray = num.slice(2 , 5);
console.log(newArray);






