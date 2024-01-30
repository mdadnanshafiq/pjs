let arr = [];
let sum = 0;
let i = 1;

while (i >= 1) {
    arr.push(i)
    sum += i;
    if (sum >= 100) {
        break;
    }
    i++;
}

console.log(arr);
console.log(sum);