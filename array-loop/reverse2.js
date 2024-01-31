const statement = 'I am a hard working person';

let reverse = '';

let arr = statement.split(' ');

for (let i of arr) {
    reverse = i.concat(' ', reverse);
}

console.log(reverse);