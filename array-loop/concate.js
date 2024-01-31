var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let str = '';
for (let n of numbers) {
    str = str.concat(n);
}

console.log(str);