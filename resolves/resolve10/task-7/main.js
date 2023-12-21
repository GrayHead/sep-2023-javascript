// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

const form = document.forms.creator;
const wrapper = document.getElementById('result');

const table = document.createElement('table');

form.onsubmit = function (e) {
    e.preventDefault();

    const rows = Number(this.row.value);
    const columns = Number(this.column.value);
    const content = this.content.value;

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');

        for (let i = 0; i < columns; i++) {
            const td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}
