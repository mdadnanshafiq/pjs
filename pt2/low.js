const heights2 = [167, 190, 120, 165, 137];
const heights = [17, 10, 9, 65, 37];

function low(arr) {
    let min = arr[0];
    for (let i of arr) {
        if (i < min) {
            min = i;
        } else {
            min = min;
        }
    }
    return min;
}

console.log(low(heights));