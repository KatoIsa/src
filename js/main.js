
// theme ...
const themebutton = document.querySelector('.themeButton');
const visual = document.querySelector('.center');
const lefttheme = document.querySelector('.header .themeButton .themeIcon .left');
const openmenu = document.querySelector('.menuButton');
const closeButton = document.querySelector('.closebutton img');
const menu = document.querySelector('.menu');
const themeButton = document.querySelector('.themeButton');
const header = document.querySelector('.header');

themeButton.addEventListener('click', () => {
    alert('section under active development \n by Kato Isa');
});
themebutton.addEventListener('click', () => {
    visual.classList.toggle('move');
    lefttheme.classList.toggle('raise');
});
//open menu
openmenu.addEventListener('click', () =>{
    menu.classList.add('toggole');
});
// close menu
closeButton.addEventListener('click', () => {
    menu.classList.remove('toggole');
});

// scroll animation ...
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;

    // define user scroll position threshold ...
    const topThreshold = 50;
    const bottomThreshold = 20000;

    if(scrolled >= topThreshold && scrolled <= bottomThreshold) {
        header.classList.add('animateheader');
    }else{
        header.classList.remove('animateheader');
    }
});

