
// 4 Pillors of DOM

// 1. Selection of an Element
/*
let a = document.querySelector("h1");
console.log(a);
*/
// 2. Changing HTML
/*
let a = document.querySelector("h1")
a.innerHTML = "Changed HTML"
*/

//3. Changing in CSS
/*
let a = document.querySelector("h1")
a.style.color = "green"
a.style.backgroundColor = "Black"
*/

// 4. Event Listener
/*
let a = document.querySelector("h1")

a.addEventListener("click",function(){
    a.innerHTML = "Badal gya hu mai"
    a.style.color = "Green"
    a.style.backgroundColor = "Black"
    
})
*/

// Example of Bulb switch on aor off
/*

let a = document.querySelector("#bulb")
let b = document.querySelector("button")

let flag = 0

b.addEventListener("click", function(){

    if (flag==0){
        a.style.backgroundColor = "yellow"
        console.log("Clicoied")
        flag = 1
    }else{
        a.style.backgroundColor = "transparent"
        console.log("Again Clickoid")
        flag = 0
    }
    
})
*/

let h = document.querySelectorAll("h1")
h.forEach(function(e){
    console.log(e)
})


