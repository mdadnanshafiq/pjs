const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

function calculateElectronicsBudget(a, b, c) {
    let total = (laptop * a) + (tablet * b) + (mobile * c);
    return total;
}

console.log(calculateElectronicsBudget(2, 5, 8));