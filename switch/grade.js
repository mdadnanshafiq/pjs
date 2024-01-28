function grading(score) {
    let grade
    switch (true){
        case (score <= 100 && score >=90):
            grade = "Grade: A";
            break;
        case (score <= 89 && score >=80):
            grade = "Grade: B";
            break;
        case (score <= 79 && score >=70):
            grade = "Grade: C";
            break;
        case (score <= 69 && score >=60):
            grade = "Grade: D";
            break;
        case (score <= 59):
            grade = "Grade: F";
            break;
        default:
            return "Incorrect Entry";
    }
    return `You got ${grade}`;
    
}

let adnan = grading(8687);
console.log(adnan);
