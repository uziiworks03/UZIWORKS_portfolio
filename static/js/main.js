document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const menuOverlay = document.querySelector(".menu-overlay");

    if (!menuButton || !menuOverlay) return;

    menuButton.addEventListener("click", function () {
        menuButton.classList.toggle("open");
        menuOverlay.classList.toggle("open");
    });
});