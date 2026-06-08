// Map
let arr = [45 , 36 , 54];

let a = arr.map((value)=>{
    console.log(value);
    return value + 1;
})
console.log(a);

// Filter
let arr2 = [45 , 36 , 54 , 23 , 12 , 0 , 3 , 5];
let a2 =arr2.filter((value)=>{
    return value < 10;
})
console.log(a2);

// Reduce

let arr3 = [0 , 3 , 5];
let a3 = arr3.reduce((value1 , value2)=>{
    return value1 + value2;
})
console.log(a3);



