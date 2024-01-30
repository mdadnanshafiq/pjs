let odds = [];

let sumOfOdds = 0;

for (n = 91; n <= 129; n += 2) {
    odds.push(n);
    sumOfOdds += n;
}

console.log(odds)
console.log(sumOfOdds);

let evens = [];
let sumOfEvens = 0;

for (i = 52; i <= 85; i += 2) {
    evens.push(i);
    sumOfEvens += i;
}

console.log(evens);
console.log(sumOfEvens);