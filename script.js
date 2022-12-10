const hamMenu = document.querySelector(".toggle-button")
const navLinks = document.getElementsByClassName("navbar-links")[0]

hamMenu.addEventListener("click",(e)=>{
    navLinks.classList.toggle("active")
})