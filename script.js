// /*========================== toggle icon navbar ===========================*/
// let menuicon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuicon.onclick = () => {
//     menuicon.classList.toggle('fa-x');
//     navbar.classList.toggle('active');
// };

// /*========================== scroll sections active Link ===========================*/
// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                  links.classList.remove('active');
//                  document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });

// /*========================== sticky navbar ===========================*/
// let header = document.querySelector('header');

// header.classList.toggle('sticky' , window.scrollY > 100);

// /*========================== remove toggle icon and navbar when click navbar Link (scroll) ===========================*/
// menuIcon.classList.remove('fa-x');
// navbar.classList.remove('active');
// };

const list = document.querySelector(".navlist");
const hamburger = document.querySelector(".fa-bars");


hamburger.addEventListener("click", ()=>{
   
    hamburger.classList.toggle(".fa-x");

})
