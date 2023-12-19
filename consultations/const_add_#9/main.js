console.log('CONST ADD #9');
console.log('-------------------------');

let cars = [
    {make: "Toyota", model: "Camry", year: 2022, color: "Blue", price: 25000, image: 'https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150796934.jpg?size=626&ext=jpg'},
    {make: "Honda", model: "Civic", year: 2021, color: "Red", price: 22000, image: 'https://img.freepik.com/free-photo/3d-car-with-vibrant-colors_23-2150797034.jpg?size=626&ext=jpg'},
    {make: "Ford", model: "Mustang", year: 2023, color: "Black", price: 40000,image: 'https://img.freepik.com/free-photo/sport-car-on-the-road-with-motion-blur-background_90220-1685.jpg?size=626&ext=jpg'},
    {make: "Chevrolet", model: "Silverado", year: 2024, color: "Gray", price: 350000, image:'https://img.freepik.com/free-photo/3d-car-on-vibrant-city-at-night_23-2150796972.jpg?size=626&ext=jpg'},
    {make: "Nissan", model: "Altima", year: 2021, color: "White", price: 23000},
    {make: "BMW", model: "X5", year: 2022, color: "Silver", price: 60000},
    {make: "Mercedes-Benz", model: "C-Class", year: 2023, color: "Black", price: 50000},
    {make: "Audi", model: "A4", year: 2022, color: "Blue", price: 45000},
    // {make: "Jeep", model: "Wrangler", year: 2022, color: "Green", price: 35000},
    // {make: "Lexus", model: "RX", year: 2023, color: "Champagne", price: 55000}
];

console.log(cars)

let wrapper = document.getElementById('wrapper');
wrapper.classList.add('test', 'test2', 'test3')
wrapper.style.border = '4px solid black';
// wrapper.style.background = 'red'
for (const car of cars) {
    let div = document.createElement('div');
    let img = document.createElement('img')
    let p = document.createElement('p')
    p.innerText = 'TEXT P'
    div.classList.add('cars')
    div.innerText = `${car.make} - ${car.year} - ${car.price} $`;
    img.src = car.image
    // wrapper.appendChild(div)
    div.append(img,p)
    wrapper.appendChild(div)
}
console.log(wrapper)



let newDiv = document.createElement('div');
document.body.appendChild(newDiv)
let clone = newDiv.cloneNode(true)


clone.innerText = 'CLONE'
document.body.appendChild(clone)
newDiv.innerText = 'NEW DIV'