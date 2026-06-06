// problem 1

let str = "Kalyan\""
console.log(str.length)

// problem 2

const sentence = "The quick brown fox jumps over the lazy dog";
const wordToFind = "fox";

console.log(sentence.includes(wordToFind)); // Output: true
console.log(`The word "${wordToFind}" is ${sentence.includes(wordToFind) ? "present" : "not present"} in the sentence.`);

// problem 3

const str1 = "Please give me Rs. 1000";
const amount = str1.slice("Please give me Rs. ".length);

console.log(amount); // Output: "1000"

// problem 4

let friend = "Deepika"
friend[3] = "R"
console.log(friend) // Output: "Deepika" (strings are immutable, so the original string remains unchanged)


