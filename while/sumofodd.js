let odds = [];

let sumOfOdds = 0;
let n = 81;

while (n <= 131) {
    odds.push(n);
    sumOfOdds += n;
    n += 2;
}

console.log(odds)
console.log(sumOfOdds);

let evens = [];
let sumOfEvens = 0;
let i = 206;
while (i <= 311) {
    evens.push(i);
    sumOfEvens += i;
    i += 2;
}

console.log(evens);
console.log(sumOfEvens);