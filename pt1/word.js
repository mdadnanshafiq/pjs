function word(a) {
    let b = a.split(' ');
    let longest = '';
    for (let i of b) {
        if (i.length > longest.length) {
            longest = i;
        } else {
            longest = longest;
        }
    }
    return longest;
}

console.log(word('I am learning Programming to become a programmer'));