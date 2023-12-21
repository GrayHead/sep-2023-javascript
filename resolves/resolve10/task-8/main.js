// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

const block = document.getElementById('count');

const currentDate =  new Date().getTime();
const date = Number(localStorage.getItem('lastRefresh')) || currentDate;
let count  =  Number(localStorage.getItem('count')) || 100;

if  (currentDate - date > 1000) {
    count += 10;
    localStorage.setItem('count', count);
}

localStorage.setItem('lastRefresh', currentDate.toString());
block.innerText = `${count}грн`;
