/* 
==============
SELECT BUTTON
==============
*/
let button = document.getElementById('scrollButton')

/* 
=====================
DISPLAY SCROLL TO TOP BUTTON
=====================
*/
window.onscroll = function() {
    displayButton()
};
// Display button when user scrolls down more than 30px from the top
function displayButton() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}