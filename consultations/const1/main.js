console.log('test');

////***************************
// let user = prompt('Enter text', 'user');

// if(user === 'Go'){
//     console.log('go to OKTEN')
// }else {
//     console.log('HOME Sleep')
// }
////***************************
// let age = 18
// switch (user) {
//     case 'user':
//         if(age === 18){
//             alert('it is USER');
//             console.log('USERS')
//         }
//         break;
//     case 'admin':
//         alert('it is ADMIN');
//         break;
//
//     default:
//         alert('ERROR 404')
// }

////***************************
// let array = ['user', 'user2', 'user3'];
// let array1 = [1, 2, 3, 4];
// let name = 10500
// console.log(name)
// //                0              1                2
// let arr = [[{}, {}, {}, {}], {name: 'Ivan'}, name];
// console.log(arr[1].name)
// console.log(arr);

////***************************

let coursesArray = [
    [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'xxxxx',
            monthDuration: 53,
            hourDuration: 909,
            modules: ['html', 'css', 'aws', 'docker', 'git', 'node.js']
        },
    ]
];
console.log(coursesArray[0][1])
console.log(coursesArray[0][0].modules)
console.log(coursesArray[0][0]['title'])
coursesArray[0][1].modules[coursesArray[0][1].modules.length] = 'NEWWWWW'; // додаємо в кінець нове значення
console.log(coursesArray[0][1])
console.log(coursesArray)

////***************************
let user = {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
            lat: '29.4572',
            lng: '-164.2990'
        }
    }}
console.log(user.address.geo.lat)