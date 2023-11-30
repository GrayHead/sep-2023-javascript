console.log('CONST ADD #4');
//
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //
// // function test(...arg) {
// //     console.log(arg)
// //
// //     for (const argElement of arg) {
// //         if (typeof argElement === "number") {
// //             console.log(argElement)
// //         }
// //     }
// // }
// // //
// // test(1, 2, 3, true, false, 45, {}, [], 1221212)
//
// function arrFn (arr){
//     // let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] % 3 === 0){
//            arr[i] = 'OKTEN';
//        }
//     }
//
//     console.log(arr)
//     // newArr[newArr.length] = item *2
//     // return newArr
// }
//
// arrFn(array)
//
// // let res = arrFn(array);
// // console.log(res)
//
// function funcArg() {
//     console.log(arguments)
//     // if (arguments.length === 1) {
//     //     console.log(arguments)
//     // }else {
//     //     console.log( arguments[0] + arguments[1])
//     // }
//     let sum =0
//     for (const argument of arguments) {
//         sum += argument
//     }
//     return sum
// }
//
// let number = funcArg(1,10);
// console.log(number)
//
// function random (amount, limit) {
//     const arr = [];
//     for (let i = 0; i < amount; i++) {
//         const arrElement = arr[i];
//         arr[arr.length] = Math.floor(Math.random() * limit )
//     }
//     return arr;
// }
//
// let random1 = random(10,100);
// console.log(random1)


// for (const item of random1) {
//     document.write(`<div>${item}</div>`)
//
// }


// function rest (...arg) {
//     console.log(arg);
//     for (const argElement of arg) {
//         console.log(argElement)
//     }
// }
// rest(1,2,3,4);

// function calc (arr1, arr2){
//     if (arr1.length !== arr2.length){
//         console.log('Not array')
//     }
//     let res = [];
//     for (let i = 0; i < arr1.length; i++) {
//       res[res.length] = arr1[i] + arr2[i]
//     }
//     return res
// }
//
// let results = calc([1,1,1],[2,3,4]);
// console.log(results)

