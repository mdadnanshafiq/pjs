let type = "others";
let age = 7;
let fare = 800;
let actual;

if (type == "student") {
    actual = fare / 2;
} else {
    if ( type == "child" && age <10) {
        actual = fare - fare;
    } else {
        if (type == "elder" && age >= 60){
            actual = fare - ((fare * 15) / 100);
        } else {
            actual = fare;
        }
    }
}

console.log(actual);