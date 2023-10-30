const c1 = document.querySelector('.c1');
const c2 = document.querySelector('.c2');
const c3 = document.querySelector('.c3');


window.addEventListener("mousemove", function(e) {
    c1.style.top = e.y + "px";
    c1.style.left = e.x + "px";
    c1.style.backgroundColor = "#f00"
    c2.style.top = e.y+50 + "px";
    c2.style.left = e.x + "px";
    c3.style.top = e.y + "px";
    c3.style.left = e.x+60 + "px";
});