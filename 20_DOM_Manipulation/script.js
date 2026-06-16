// dom manipulation
// html se element select karna
// text badlana
// html badalana
// css badalana
// Attribute badalana
// Event Listeners Add karna
/*
let abcd = document.getElementsByClassName("abcd");
console.dir(abcd); // in the console section in the website it removes for showing h1 as an tag
*/
/*
let h1 = document.querySelector("h1");
h1.innerHTML = "<i>I am good</>"
h1.hidden = true
*/

// Attribute Manipulation
/*
let a = document.querySelector("a");
a.setAttribute("href", "https://www.google.com");
*/
/*
let img = document.querySelector("img");
img.setAttribute("img" , "https://images.unsplash.com/photo-1780303062451-49cf76588245?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
*/
/*
let a = document.querySelector("a");
console.log(a.getAttribute("href"));
*/
/*
let a = document.querySelector("a");
a.removeAttribute("href");
*/


// Dynamic DOM manipulation :

/*
let h1 =  document.createElement("h1");
h1.textContent = "Hello ji";
document.body.append(h1);
*/

// Create Element
// append/prepend karo jaha bhi element chahiye wha
/*
let h1 = document.createElement("h1");
h1.textContent = "Hello! How are you ?";
document.querySelector("body").prepend(h1);
*/
/*
let h1 = document.createElement("h1");
h1.textContent = "hey I am coming from outside.";

document.querySelector("div").appendChild(h1);
*/
/*
let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "yellow";
h1.style.fontFamily = "Gilroy";
h1.style.textTransform = "capitalize";
*/

let h1 = document.querySelector("h1");
//console.dir(h1);
h1.classList.add("hulu")
h1.classList.toggle("hulu") // agar lagi hoti too hata deta hai aur hati hoti too laga deta hai

