// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

const form = document.forms.creator;

form.onsubmit = function (e) {
    e.preventDefault();

    const wrapper = document.createElement('div');
    const name = document.createElement('div');
    const surname = document.createElement('div');
    const age = document.createElement('div');

    name.innerText = `Name: ${this.name.value}`;
    surname.innerText = `Surname: ${this.surname.value}`;
    age.innerText = `Age: ${this.age.value}`;

    wrapper.classList.add('item', 'wrapper');

    this.name.value = '';
    this.surname.value = '';
    this.age.value = '';

    wrapper.append(name, surname, age);
    document.body.appendChild(wrapper);
}
