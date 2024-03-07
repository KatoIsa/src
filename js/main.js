
// theme ...
const themebutton = document.querySelector('.themeButton');
const visual = document.querySelector('.center');
const lefttheme = document.querySelector('.header .themeButton .themeIcon .left');
const openmenu = document.querySelector('.menuButton');
const closeButton = document.querySelector('.closebutton img');
const menu = document.querySelector('.menu');
const themeButton = document.querySelector('.themeButton');

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
