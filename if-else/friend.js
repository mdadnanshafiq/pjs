let uScore = 89;
let fScore = 86;

if (uScore > 80) {
    if (fScore > 80) {
        console.log("Lets go to KFC");
    } else {
        if (fScore < 80 && fScore >= 60 ) {
            console.log("Better Luck Next Time");
        } else {
            if(fScore < 60 && fScore >= 40) {
                console.log("UNSEEN");
            } else {
                if (fScore < 40) {
                    console.log("You have been blocked");
                } else {
                    console.log("Dead Shelly");
                }
            }
        }
    }
} else {
    if (uScore < 80) {
        console.log("Sleep the sadness away");
    } else {
        console.log("Copy Sheldon Cooper");
    }
}