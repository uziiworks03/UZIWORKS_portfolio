const menuButton = document.getElementById("menuButton");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

menuButton.addEventListener("click", function () {
    menuOverlay.classList.add("active");
});

menuClose.addEventListener("click", function () {
    menuOverlay.classList.remove("active");
});