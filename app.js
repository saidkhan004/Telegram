const humburger = document.querySelector(".header .nav-bar .nav-list .hamburger");
const humburger2 = document.querySelector(".header .nav-bar .nav-list .ontap");
const mobil_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelector(".header .nav-bar .nav-list ul li a");
const header = document.querySelector(".header.container");

humburger.addEventListener('click', () => {
    humburger.classList.toggle('active');
    mobil_menu.classList.toggle('active');
});




//shu yerga yozildi Saidxon mana code 

function Change() {
    //bu menuni yoq qiladi
    mobil_menu.className = '';


    //bu buttonni avalgi holiga qaytaradi
    humburger.classList.toggle('active');
}







humburger2.addEventListener('click', () => {
    humburger2.classList.toggle('active');
    mobil_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29323c";
    } else {
        header.style.backgroundColor = 'transparent'; 
    }
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        humburger.classList.toggle('active');
        mobil_menu.classList.toggle('active');
    });
});

