// browser mein page par koi bhi harkat karo event raise ho jayega
// kuch screen par ho aur aapko reaction dena ho to us waqt aapko event handle karna aana chahiye
// event matlab hota hai koi action hua
// event listener ka matlab hai aapne koi action ka reaction diya
/*
let h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    h1.style.color = "red";
})
*/
/*
let p = document.querySelector("p");

p.addEventListener("click" , function(){
    p.style.color = "green";
})
*/
/*
let p = document.querySelector("p");

p.addEventListener("dblclick" , function(){
    p.style.color = "yellow";
});
*/

// Event Listener

// element.addEventListener("event name" , function(){}); 

// remove EventListener

/*

let p = document.querySelector("p");

function dblclick() {
    p.style.color = "yellow";
}

p.addEventListener("dblclick", dblclick);
p.removeEventListener("dblclick" , dblclick);

*/
/*
let input = document.querySelector("input");

input.addEventListener("input" , function(){
    console.log("typed");
});
*/

/*
let input = document.querySelector("input");

input.addEventListener("input" , function(evt){
    console.log(evt.data);
});
*/



