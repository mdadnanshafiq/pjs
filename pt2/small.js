const heights2 = ['rahim', 'robin', 'rafi', 'rony', 'som', 'rashed'];

function tiny(arr) {
    let min = arr[0];
    for (let i of arr) {

        if (i.length < min.length) {
            min = i;
        }
    }
    return min;
}

console.log(tiny(heights2));