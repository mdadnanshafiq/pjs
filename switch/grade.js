let score = 89;

switch (true){
    case (score <= 100 && score >=90):
        console.log("Grade: A");
        break;
    case (score <= 89 && score >=80):
        console.log("Grade: B");
        break;
    case (score <= 79 && score >=70):
        console.log("Grade: C");
        break;
    case (score <= 69 && score >=60):
        console.log("Grade: D");
        break;
    case (score <= 59):
        console.log("Grade: F");
        break;
    default:
        console.log("Incorrect Entry")
}

