const phone_nav_btn = document.querySelector(".phone-nav-btn");
const lines = document.querySelectorAll(".phone-nav-btn-line");
const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")
const phone_nav_container = document.querySelector(".phone-nav")
window.addEventListener('load', function() {

    phone_nav_btn.addEventListener("click", function() {
        if (!(lines[1].style.display == "none")) {
            lines[0].style.animationName = "nav-anim1";
            lines[1].style.display = "none";
            lines[2].style.animationName = "nav-anim2";
            phone_nav_container.style.animationName = "show-nav";

        } else {
            lines[0].style.animationName = "";
            lines[1].style.display = "block";
            lines[2].style.animationName = "";
            phone_nav_container.style.animationName = "";
        }
    })


})