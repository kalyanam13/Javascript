// Part - 1

let boy1 = "Nikhil"
let boy2 = "Raman"

let student = `${boy1} is the friend of ${boy2}`
console.log(student) // Nikhil is the friend of Raman

let stu1 = `Nikhil friend's also "is" Raman's friend`
console.log(stu1)

// Escape Sequence Characters
let stu2 = "Nikhil friend's also \"is\" Raman's friend"
console.log(stu2) // Nikhil friend's also "is" Raman's friend

// Part - 2

let name = "Nikhil"
console.log(name.length) // 6

console.log(name.toUpperCase()) // NIKHIL
console.log(name.toLowerCase()) // nikhil

console.log(name.slice(2, 4))

let name1 = "Munna Tripathi"

console.log(name1.replace("Tripathi", "Shukla")) // Munna Shukla

console.log(name.concat(" is a friend of ", name1))

// Strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. However, you can create a new string by performing operations on the existing string.
let str = "Hello"
str[0] = "h" // This will not change the string
console.log(str) // Hello


