const menuBar = document.querySelector(".menu-bar");
const menuList = document.querySelector(".nav-list");
let isMenuOpen = false;
menuBar.addEventListener('click' , ()=>{
    console.log("clicked")
        menuList.classList.toggle("nav-list-disable");
    
})

menuList.addEventListener('click',()=>{
    menuList.classList.toggle("nav-list-disable");
})
