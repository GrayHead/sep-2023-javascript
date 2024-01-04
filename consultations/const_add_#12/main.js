console.log('CONST ADD #12');
console.log('-------------------------');


// let url = new URL("https://rickandmortyapi.com/api/character/");
// let url = new URL("https://jsonplaceholder.typicode.com/users/");
let url = new URL("https://dummyjson.com/products/");
console.log(url);

let div = document.createElement('div');
div.classList.add('card')
document.body.appendChild(div)
// fetch(url).then(res => res.json()).then(({results: items}) => {
// fetch(url).then(res => res.json()).then((items) => {
fetch(url).then(res => res.json()).then(({products:items}) => {

    for (const item of items) {

        let p = document.createElement('p');
        let btn = document.createElement('button');
        let btnDel = document.createElement('button');
        div.append(p, btn, btnDel);
        // p.innerText = `${item.id}- ${item.name}`;
        p.innerText = `${item.id}- ${item.title}`;
        btn.innerText = `DETAILS`;
        btnDel.innerText = `DELETE`;

        btn.addEventListener('click', () => {
            document.location.href = `details.html?userID=` + JSON.stringify(item);
        })

        btnDel.addEventListener('click', ()=>{
            deleted(item.id);
            p.style.display='none';
            btn.style.display='none';
            btnDel.style.display='none';
        })
    }

    function deleted(id){
        fetch(url+id).then(res=>res.json()).then(value=>{
            console.log('DELETED CONFIRM: ', value)
        })
    }

})