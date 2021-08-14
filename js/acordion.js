'use strict';

const listItems = document.querySelectorAll('.accordion__item');

listItems.forEach(function (item) {
  let btn = item.querySelector('.accordion__btn');
  let clsName = 'accordion__item open';
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (item.className === clsName) {
      item.classList.remove('open');
    } else {
      item.classList.add('open');
    }
  });
});