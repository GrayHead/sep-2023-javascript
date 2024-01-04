// console.log('CONST ADD #7');
// console.log('-------------------------');
//
// let cars = [
//     {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000},
//     {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000},
//     {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000},
//     {make: "Chevrolet", model: "Silverado", year: 2022, color: "Gray", price: 35000},
//     {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
//     {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
//     {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
//     {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
//     {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
//     {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000},
//     {make: "BMW", model: "X7", year: 2024, color: "Red", price: 160000},
//     {make: "BMW", model: "X7", year: 2024, color: "Red", price: 1600001},
//     {make: "BMW", model: "X7", year: 2024, color: "Red", price: 1600010},
//     {make: "BMW", model: "X7", year: 2024, color: "Red", price: 1600010222},
//     {make: "BMW", model: "X7", year: 2024, color: "Red", price: 16000011},
//     {make: "BMW", model: "X7", year: 2024, color: "Red", price: 16000011},
// ];
//
// let products = [
//     {name: "Laptop", price: 1000, category: "Electronics"},
//     {name: "T-shirt", price: 20, category: "Clothing"},
//     {name: "Book", price: 15, category: "Books"},
//     {name: "Shoes", price: 50, category: "Footwear"},
//     {name: "Headphones", price: 80, category: "Electronics"},
//     {name: "Backpack", price: 40, category: "Accessories"},
//     {name: "Guitar", price: 300, category: "Musical Instruments"},
//     {name: "Watch", price: 150, category: "Accessories"},
//     {name: "Cookware Set", price: 200, category: "Kitchenware"},
//     {name: "Bicycle", price: 400, category: "Sports & Outdoors"}
// ];
//
// let users = [
//     {
//         id: 1,
//         "name": "Leanne Graham",
//         "username": "Bret",
//         "email": "Sincere@april.biz",
//         "address": {
//             "street": "Kulas Light",
//             "suite": "Apt. 556",
//             "city": "Gwenborough",
//             "zipcode": "92998-3874",
//         },
//         "phone": "1-770-736-8031 x56442",
//         "website": "hildegard.org",
//         "company": {
//             "name": "Romaguera-Crona",
//             "catchPhrase": "Multi-layered client-server neural-net",
//             "bs": "harness real-time e-markets"
//         }
//     },
//     {
//         "id": 2,
//         "name": "Ervin Howell",
//         "username": "Antonette",
//         "email": "Shanna@melissa.tv",
//         "address": {
//             "street": "Victor Plains",
//             "suite": "Suite 879",
//             "city": "Wisokyburgh",
//             "zipcode": "90566-7771",
//         },
//         "phone": "010-692-6593 x09125",
//         "website": "anastasia.net",
//         "company": {
//             "name": "Deckow-Crist",
//             "catchPhrase": "Proactive didactic contingency",
//             "bs": "synergize scalable supply-chains"
//         }
//     },
//     {
//         "id": 3,
//         "name": "Clementine Bauch",
//         "username": "Samantha",
//         "email": "Nathan@yesenia.net",
//         "address": {
//             "street": "Douglas Extension",
//             "suite": "Suite 847",
//             "city": "McKenziehaven",
//             "zipcode": "59590-4157",
//         },
//         "phone": "1-463-123-4447",
//         "website": "ramiro.info",
//         "company": {
//             "name": "Romaguera-Jacobson",
//             "catchPhrase": "Face to face bifurcated interface",
//             "bs": "e-enable strategic applications"
//         }
//     },
//     {
//         "id": 4,
//         "name": "Patricia Lebsack",
//         "username": "Karianne",
//         "email": "Julianne.OConner@kory.org",
//         "address": {
//             "street": "Hoeger Mall",
//             "suite": "Apt. 692",
//             "city": "South Elvis",
//             "zipcode": "53919-4257",
//         },
//         "phone": "493-170-9623 x156",
//         "website": "kale.biz",
//         "company": {
//             "name": "Robel-Corkery",
//             "catchPhrase": "Multi-tiered zero tolerance productivity",
//             "bs": "transition cutting-edge web services"
//         }
//     },
//     {
//         "id": 5,
//         "name": "Chelsey Dietrich",
//         "username": "Kamren",
//         "email": "Lucio_Hettinger@annie.ca",
//         "address": {
//             "street": "Skiles Walks",
//             "suite": "Suite 351",
//             "city": "Roscoeview",
//             "zipcode": "33263",
//         },
//         "phone": "(254)954-1289",
//         "website": "demarco.info",
//         "company": {
//             "name": "Keebler LLC",
//             "catchPhrase": "User-centric fault-tolerant solution",
//             "bs": "revolutionize end-to-end systems"
//         },
//         run: function (){
//             console.log('RUNNNN')
//         }
//     }
// ];
// console.log(users)
//
// let clone = [...users]
// console.log(users === clone)
// console.log(clone)
// console.log('**************8')
// // try{
// //     console.log('START');
// //     let obj = {};
// //     console.log(obj.name1)
// //     if(!obj.name1){
// //      throw new Error('this object error')
// //     }
// // }
// // catch (e){
// //     console.log('type error: ', e)
// // }
// //
// // console.log(users)
//
//
// // let obj = {
// //     id: 10500,
// //     name: 'Jason',
// //     skills: {year:2023}
// // }
// // let {id, name} = obj;
// // console.log(id, name);
//
// console.log(users)
//
// let str = JSON.stringify(users);
// let parse =JSON.parse(str);
// console.log(str);
// console.log(parse[0].name);
// console.log(users === parse)
// //
// // console.log(parse);