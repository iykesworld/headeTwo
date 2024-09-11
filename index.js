let menuIcon = document.getElementById("menu-icon");
let navBar = document.querySelector(".navbar");

menuIcon.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
})


let darkModeIcon = document.querySelector('#darkMode-icon');
darkModeIcon.addEventListener('click', function(){
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
});