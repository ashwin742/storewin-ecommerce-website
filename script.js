let menu = document.querySelector('#menu-icon');
let nav_list = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav_list.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav_list.classList.remove('open');
}