const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];

function salary(arr) {
    let list = [];
    for (let i of arr) {
        list.push((i.experience * i.increment) + i.starting)
    }
    console.log(list);
    let total = 0;
    for (let x of list) {
        total += x;
    }
    // let pay = total / (list.length - 1);  --average
    return total;
}

console.log(salary(employees));