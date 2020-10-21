// console.log("hello world, baybay");

// const navbarBurger = document.querySelector(".navbar-burger");
// const navbarMenu = document.querySelector(".navbar-menu");
// const navbarItens = document.querySelectorAll(".navbar-item");

// navbarBurger.addEventListener("click", () => {
//     navbarMenu.classList.toggle("is-active");
//     navbarItens.forEach(item => {
//         item.addEventListener("click", () => {
//             navbarMenu.classList.remove("is-active");
//         })
//     })
// })

// navbarItens.forEach(item => {
//     item.addEventListener("click", () => {
//         if(item.dataset.target){
//             item.dataset.target.classList.add("is-active");
//         }else item.classList.remove("is-active")
//     })
// })

// // fixed navbar
// const navbar = document.querySelector(".hero .navbar")
// window.addEventListener("scroll", () => {
//     if(pageYOffset > navbar.clientHeight - 10){
//         navbar.classList.add("is-fixed-top");
//         navbar.style.background = "black";
//     } else{
//         navbar.classList.remove("is-fixed-top");
//         navbar.style.background = "0 0 ";
//     }
// })