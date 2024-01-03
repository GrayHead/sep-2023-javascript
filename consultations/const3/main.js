let i = 0
const foo = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        throw new Error('WWWWWWWWWWWWWW')
        console.log(res)
        const result = await res.json();
        foo2(result);
    } catch (e) {
        console.error(e.message)
        i++
        if (i < 20) {
            foo()
        }
    }
}
void foo();


const foo2 = (todo, ert) => {
    console.log(todo);
}

let counter = -2;

new Promise((resolve, reject) => {

    setTimeout(() => {
        if (counter < -1) {
            reject('xxxxxxx');
        }
        console.log(counter);
        counter++; //2
        resolve(counter);
    }, 1000);
})
    .catch((reason) => {
        console.error(reason);
    })
    .then((counter) => {
        new Promise((resolve) => {
            setTimeout(() => {
                console.log(counter, 1);// 2
                counter++; // 3
                resolve(counter); //3
            }, 3000);
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter);
                counter++
                resolve(counter);
            }, 2000)
        })
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(counter);
            }, 2000);
        })
    })
    .catch(reason => {
        console.error(reason);
    });
