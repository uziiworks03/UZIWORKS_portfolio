document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuClose = document.getElementById("menuClose");

    console.log("MENU:", menuButton, menuOverlay, menuClose);

    menuButton.addEventListener("click", function () {
        menuOverlay.classList.add("open");
    });

    menuClose.addEventListener("click", function () {
        menuOverlay.classList.remove("open");
    });

});