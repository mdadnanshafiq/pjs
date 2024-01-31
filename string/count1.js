let str = 'Count how many times a string has the letter a';
let countA = 0;
for (i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        countA += 1;
    }
}

console.log(countA);