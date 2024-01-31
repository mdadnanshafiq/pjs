
function capStr(string) {
    let stringSmall = string.toLowerCase();
    let str2 = [];
    let str3;
    let str = stringSmall.split(' ');
    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
        str2.push(str[i]);

    }
    return str3 = str2.join(' ');
}

console.log(capStr('Capitalize EvEry first LeTter of each worD in a String'));