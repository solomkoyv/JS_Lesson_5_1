'use strict'

let menu = document.querySelector('.menu'),
  columns = document.querySelectorAll('.column'),
  menuItems = document.querySelectorAll('.menu-item'),
  menuItem = document.createElement('li'),
  title = document.getElementById('title'),
  advertising = document.querySelector('.adv'),
  questionHolder = document.getElementById('prompt'),
  question = prompt('Как вы относитесь к технике apple ?', '');

console.log(questionHolder);
console.log(question);



menu.appendChild(menuItem);

menuItem.classList.add('menu-item');
menuItem.textContent = 'Пятый пункт';
menu.removeChild(menuItems[2]);
menu.insertBefore(menuItems[2], menuItems[1]);

document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

title.textContent = 'Мы продаем только подлинную технику Apple';
columns[1].removeChild(advertising);

questionHolder.innerHTML = `<h1>${question}</h1>`;