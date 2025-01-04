const burgerMenu = document.getElementById("toggleMenu")
const navMenu1 = document.getElementById("navMenu")

burgerMenu.addEventListener("click", () =>{
    navMenu1.classList.toggle("show")
})