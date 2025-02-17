// //Задание 1
// const containOnlyDigits = (str) => {
//     const regExp = /^\d+$/;
//     return regExp.test(str);
// }

// console.log(containOnlyDigits("12345"));
// console.log(containOnlyDigits("1234sdfg5"));

// //Задание 2

// const logEverySecond = () => {
//     setInterval(() => {
//         console.log("Прошла секунда");
//     }, 1000);
// };

// logEverySecond();

// //Задание 3

// const count = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         if (i === 10) {
//             clearInterval(interval);
//         }
//         i++;
//     }, 1000);
// };

// count();

// //Задание 4

// document.addEventListener("DOMContentLoaded", function () {
//     const box = document.getElementById("colorBox");

//     box.addEventListener("click", function () {
//         box.classList.toggle("active");
//     });
// });



