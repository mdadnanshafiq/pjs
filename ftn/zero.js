function count_zero(a) {
    let zero = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === '0') {
            zero += 1;
        }
    }
    return zero;
}

console.log(count_zero('01100001 01100100 01101110 01100001 01101110'));