function vowel(a) {
    let b = a.toLowerCase();
    let sum = 0;
    for (let i of b) {
        if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u') {
            sum += 1;
        } else {
            sum += 0;
        }
    }
    return sum;
}

console.log(vowel('A quick brown fox jumps over the lazy dog.'));