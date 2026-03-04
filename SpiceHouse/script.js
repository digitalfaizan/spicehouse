const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
navLinks.classList.toggle("active");
});


const buttons = document.querySelectorAll(".menu-buttons button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

button.addEventListener("click", () => {

const category = button.dataset.category;

cards.forEach(card => {

if(category === "all" || card.classList.contains(category)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

});