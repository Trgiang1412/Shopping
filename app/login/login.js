const cart = document.querySelector(".cartRow");
const sneaker = document.querySelector(".sneaker img");
const container = document.querySelector(".container");

sneaker.addEventListener("mouseenter", () => {
    cart.style.transition = "none";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
});

sneaker.addEventListener("mouseleave", () => {
    cart.style.transition = "all 0.5s ease";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
});

const animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');

    e.target.classList.add('animate');
    setTimeout(function() {
        e.target.classList.remove('animate');
    }, 6000);
};

const classname = document.getElementsByClassName("btn1");

for (let i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', animateButton, false);
}