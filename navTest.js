let hamButton = document.getElementById("nav-toggle");
let menu = document.querySelector(".nav-menu");
let closeButton = document.getElementById("close-menu");

hamButton.addEventListener("click", function displayNav () {
    menu.style.width = "25%";
    hamButton.style.display = "none";
});

closeButton.addEventListener("click", function closeMenu() {
    menu.style.width = "0";
    hamButton.style.display = "block";
});