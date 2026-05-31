// 77
// "kalyan"
// true

// Arithmetic Operators

console.log("Operators in JS")
let a = 10
let b = 4
// console.log("a + b = ", a + b)
// console.log("a - b = ", a - b)
// console.log("a * b = ", a * b)
// console.log("a / b = ", a / b)
// console.log("a % b = ", a % b)
// console.log("a ** b = ", a ** b)

//console.log("a++ = ", a++) // a++ first return a and then increment a
//console.log("a = ", a)

//console.log("a-- = ", a--)
//console.log("a = ", a)

//console.log("++a = ", ++a) // ++a first increment a and then return a
//console.log("a = ", a)

//console.log("--a = ", --a)
//console.log("a = ", a)


// Assignment Operators
a += 5 // Same as a = a + 5
console.log("a = ", a)

a -= 5 // Same as a = a - 5
console.log("a = ", a)

a *= 5 // Same as a = a * 5
console.log("a = ", a)

// Comparison Operators
let comp1 = 6
let comp2 = "6"

console.log("comp1 == comp2 : ", comp1 == comp2) // false
console.log("comp1 != comp2 : ", comp1 != comp2) // true
console.log("comp1 > comp2 : ", comp1 > comp2) // false
console.log("comp1 < comp2 : ", comp1 < comp2) // true
console.log("comp1 >= comp2 : ", comp1 >= comp2) // false
console.log("comp1 <= comp2 : ", comp1 <= comp2) // true

console.log("comp1 === comp2 : ", comp1 === comp2) // false
console.log("comp1 !== comp2 : ", comp1 !== comp2) // true

// Logical Operators
let x = 5
let y = 10 

console.log("x < y && x == 5 :", x < y && x == 5) // true
console.log("x < y || x == 10 :", x < y || x == 10) // true
console.log("! (x < y) :", !(x < y)) // false