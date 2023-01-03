// 要素を置換する
const newElement = document.createElement('p');
newElement.textContent = '置き換える要素';

const firstElement = document.querySelector('.first');
firstElement.replaceWith(newElement);