function average(a, b) {
    let sum = 0;
    for (let i of a) {
        sum = sum + i;
    }
    let avg = sum / b;
    return avg;
}

let arr = [10, 20, 30, 40, 50];
let len = arr.length;

console.log(average(arr, len));