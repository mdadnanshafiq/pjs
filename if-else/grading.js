let score = 89;

if (score <= 100 && score >= 90) {
    console.log("Grade: A");
} else {
    if (score <= 89 && score >= 80) {
        console.log("Grade: B");
    } else {
        if (score <= 79 && score >= 70) {
            console.log("Grade: C");
        } else {
            if (score <= 69 && score >= 60) {
                console.log("Grade: D");
            } else {
                if (score <= 59 && score >= 0) {
                    console.log("Grade: F");
                } else {
                    console.log("Incorrect Entry")
                }
            }
        }
    }
}