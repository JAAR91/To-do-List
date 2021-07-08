const mainContainer = document.getElementById('container');
mainContainer.classList.add('d-flex');

const menu = document.createElement('nav');
menu.classList.add('position-fixed', 'w-100');

mainContainer.appendChild(menu);

const Navul = document.createElement('ul');
Navul.classList.add('nav', 'bg-dark', 'p-2');
menu.appendChild(Navul);

const navLi = document.createElement('li');
navLi.classList.add('nav-item');
Navul.appendChild(navLi);

export const menuButtom = document.createElement('a');
menuButtom.classList.add('btn', 'btn-dark');
menuButtom.href= '#';
navLi.appendChild(menuButtom);

const menubuttonImg = new Image;
menubuttonImg.src = 'https://image.flaticon.com/icons/png/512/812/812847.png';
menubuttonImg.style.width = '25px';
menuButtom.appendChild(menubuttonImg);
