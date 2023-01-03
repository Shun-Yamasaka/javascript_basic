// 指定要素の前に要素を追加する
const newElement = document.createElement('p');
newElement.textContent = '新しく追加しました';

const firstElement = document.querySelector('.first');
firstElement.before(newElement);