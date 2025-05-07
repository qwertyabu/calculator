// import calculate, { add as yigindi, subtract as ayirma, multiply as kopayma, divide as bolinma } from "./module.js";

// document.addEventListener('DOMContentLoaded', () => {
//     const num1 = document.getElementById('num1');
//     const num2 = document.getElementById('num2');
//     const result = document.getElementById('result');

//     document.getElementById('add').addEventListener('click', () => {
//         result.textContent = `Natija: ${yigindi(Number(num1.value), Number(num2.value))}`;
//     });

//     document.getElementById('subtract').addEventListener('click', () => {
//         result.textContent = `Natija: ${ayirma(Number(num1.value), Number(num2.value))}`;
//     });

//     document.getElementById('multiple').addEventListener('click', () => {
//         result.textContent = `Natija: ${kopayma(Number(num1.value), Number(num2.value))}`;
//     });

//     document.getElementById('divide').addEventListener('click', () => {
//         result.textContent = `Natija: ${bolinma(Number(num1.value), Number(num2.value))}`;
//     });
// });
import calculate, { add as yigindi, subtract as ayirma, multiply as kopayma, divide as bolinma } from './module.js';

document.addEventListener('DOMContentLoaded', () => {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('result');

    document.getElementById('add').addEventListener('click', () => {
        result.textContent = `Natija: ${yigindi(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('subtract').addEventListener('click', () => {
        result.textContent = `Natija: ${ayirma(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('multiple').addEventListener('click', () => {
        result.textContent = `Natija: ${kopayma(Number(num1.value), Number(num2.value))}`;
    });

    document.getElementById('divide').addEventListener('click', () => {
        result.textContent = `Natija: ${bolinma(Number(num1.value), Number(num2.value))}`;
    });
});
