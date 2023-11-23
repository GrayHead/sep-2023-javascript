// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1,2,3,4, true, 'tets', {name:true}, [1,2,3]];
console.log(arr[0], arr[1]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'Harry',
    pageCount: 500,
    genre: 'Horror'
}
let book2 = {
    title: 'Harry1',
    pageCount: 5000,
    genre: 'Horror1'
}
let book3 = {
    title: 'Harry2',
    pageCount: 1500,
    genre: 'Horror1'
}

console.log(book1)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book = {
    title: 'Harry',
    pageCount: null,
    genre: 'Horror',
    author: [{name:'Jason', age: 145}, {name:'Oleg', age: 20}]
}
console.log(book);

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача

let usersArr = [
    {name: 'Max',  userName: 'JS', password: 123456},
    {name: 'Max1', userName: 'JS-1', password: 123457},
    {name: 'Max2', userName: 'JS-2', password: 123458},
    {name: 'Max3', userName: 'JS-3', password: 123459},
    {name: 'Max4', userName: 'JS-4', password: 1234500},
];
// console.log(usersArr.password)
console.log('password: ' + usersArr[0]['password']);
console.log('password: ' + usersArr[1].password);
console.log('password: ' + usersArr[2].password);
console.log('password: ' + usersArr[3].password);
console.log('password: ' + usersArr[4].password);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 1;
if(x !== 0){
    console.log(true)
}else {
    console.log(false)
}

// ternar orerator
// x!==0 ?  console.log(true) :  console.log(false);


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число (в першу, другу, третю или четверту частину години).

let time = -100500;

if (time > 45 && time <=60){
    console.log('4 частина')
}else if(time > 30 && time <=45){
    console.log('3 частина')
}else if(time > 15 && time <=30){
    console.log('2 частина')
}else if(time > 0 && time <=15){
    console.log('1 частина')
}else{
    console.log('Невірні дані')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

let day = -100500;

if (day >= 0 && day <=15 ){
    console.log('перша декада')
}else if(day> 15 && day <=31){
    console.log('Друга декада')
}else {
    alert('WRONG DAY')
    console.log('ERROR')
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = +prompt('Enter number of week', 4);
switch (week){
    case 1:
        console.log('Проснувся');
        break;
    case 2:
        console.log('Встав');
        break;
    case 3:
        console.log('Поснідав');
        break;
    case 4:
        console.log('Пішов на роботу');
        break;
    case 5:
        console.log('Прийшов з роботи');
        break;
    case 6:
        console.log('Вихідні');
        break;
    case 7:
        console.log('Скоро на роботу');
        break;

    default:
        console.log('ERROR')
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 10;
let num2 = +prompt('Etner number', 10);
if (num1 === num2){
    console.log('Числа рівні')
}else if(num1 > num2){
    console.log('MAX is: ' + num1)
}else{
    console.log('MAX is: ' + num2)
}


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,за допомоги  оператора || буде присвоювати змінній х значення "default"
//     якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)


let x1 = null;  // null 0 '' undefined false   - всі повертають false по замовчуванні
x1 = x1 || 'default';
console.log(x1);

//          false    true
// let x1 = 0 || 'default';
// console.log(x1);

// let x = ''
// if(!x){
//     x = 'default';
//     console.log(x)
// }else {
//     console.log(x)
// }

// console.log(!!null)
// console.log(!!'null')
// console.log(!!1)
// console.log(!!'')
// console.log(!!0)

// let a = null;
// console.log(!!a)

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let array = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(array[0].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[1].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[2].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[3].monthDuration >= 5){
    console.log('Supper - course is cool!')
}else{
    console.log('Course min 4')
}
if(array[4].monthDuration >= 5){console.log('Supper - course is cool!')};
if(array[5].monthDuration >= 5){
    console.log('Supper - course is cool!')
}else{
    console.log('Course min 4')
}


