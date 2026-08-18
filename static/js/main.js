document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("menuButton");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuClose = document.getElementById("menuClose");

    if (!menuButton || !menuOverlay) {
        console.log("Menu elements not found");
        return;
    }

    menuButton.addEventListener("click", function () {
        menuOverlay.classList.add("open");
        menuButton.classList.add("open");
    });

    if (menuClose) {
        menuClose.addEventListener("click", function () {
            menuOverlay.classList.remove("open");
            menuButton.classList.remove("open");
        });
    }

});