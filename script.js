/* 
==============
VARIABLES
==============
*/

let form = document.getElementById("popup");
let contact = document.getElementById('contact');
let close = document.getElementById('close');
let send = document.getElementById('send');

/* 
=============================
EVENT LISTENERS W/ FUNTIONS
=============================
*/

contact.addEventListener("click", function() {
    form.style.display = "block";
})

close.addEventListener("click", function() {
    form.style.display = "none";
})

send.addEventListener("click", function() {
    form.style.display = "none";
})