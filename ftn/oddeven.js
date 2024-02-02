function math(a) {
    let result;
    if (a % 2 === 1) {
        result = a * 2;
    } else {
        result = a / 2;
    }
    return result;
}

console.log(math(5));