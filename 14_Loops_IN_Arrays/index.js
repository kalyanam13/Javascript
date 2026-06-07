let num = [1, 2, 3, 4, 5];
/*
for (let i = 0 ; i<num.length ; i++){
    console.log(num[i]);
}
*/

// for each loop
num.forEach((element) => {
    console.log(element*element);
});

// Array.from

let name = "Satyarth";
let arr = Array.from(name);
console.log(arr);

// for of loop
for (let item of num){
    console.log(item);
}

// for in loop
for (let index in num){
    console.log(num[index]);
}

