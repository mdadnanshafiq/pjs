function season(month){
    let current
    switch(month) {
        case 1:
            current = "Winter";
            break;
        case 2:
            current = "Winter";
            break;
        case 3:
            current = "Spring";
            break;
        case 4:
            current = "Spring";
            break;
        case 5:
            current = "Spring";
            break;
        case 6:
            current = "Summer";
            break;
        case 7:
            current = "Summer";
            break;
        case 8:
            current = "Summer";
            break;
        case 9:
            current = "Autumn";
            break;
        case 10:
            current = "Autumn";
            break;
        case 11:
            current = "Autumn";
            break;
        case 12:
            current = "Winter";
            break;
        default:
            return "Incorrect Entry";
        
    }
    return `This is ${current}`;
}

let currentSeason = season(99);
console.log(currentSeason);