// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

const count = localStorage.getItem('count') || 0;
const block = document.getElementById('count');
const newResult = (Number(count) + 1).toString();

block.innerText = newResult;
localStorage.setItem('count', newResult);
