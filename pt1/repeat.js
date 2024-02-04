function repeat(a, b) {
    let sum = 0;
    for (let i of b) {
        if (i === a) {
            sum += 1;
        }
        else {
            sum += 0;
        }
    }
    return sum;
}

console.log(repeat(25, [5, 6, 11, 12, 98, 5]));