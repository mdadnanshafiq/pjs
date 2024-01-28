let fruits = ['banana', 'apple', 'orange', 'grapes', 'mango'];

let age = 24;

let passed = true;

let name = 'Adnan';

function checkArray (variable) {
    if (Array.isArray(variable)) {
        return 'It is an array';
    } else {
        return 'It is not an array';
    }
}

console.log(checkArray(fruits));