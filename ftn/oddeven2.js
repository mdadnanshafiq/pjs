function odd_even(a) {
    let result;
    if (a % 2 === 0) {
        result = 'Even';
    } else {
        result = 'Odd';
    }
    return result;
}

console.log(odd_even(7));