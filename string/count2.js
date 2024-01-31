let str = 'Count how many times a string has the letter a or A';
let countA = 0;
let countACap = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        countA += 1;
    } else if (str[i] === 'A') {
        countACap += 1;
    }
}

console.log('a: ', countA);
console.log('A: ', countACap);