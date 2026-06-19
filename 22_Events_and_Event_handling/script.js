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
/*
let inp = document.querySelector("input");

inp.addEventListener("input" , function(dets){
    if (dets.data !== null){
        console.log(dets.data)
    }
});
*/

// change event tab chalta hai jab aapka koi input select ya textarea mei koi change hojaaye
/*
let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change", function(dets){
    device.textContent = `${dets.target.value} Device Selected`;
})
*/
let h1 = document.querySelector("h1");

window.addEventListener("keydown" , function(dets){
    if(dets.key === " "){
        h1.textContent = "SPC"
    }
    else{
        h1.textContent = dets.key;
    }
});


