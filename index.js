var hamburger = document.querySelector(".hamburger");
var navmenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
});

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))