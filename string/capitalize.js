
function capStr(string) {
    let str2 = [];
    let str3;
    let str = string.split(' ');
    for (i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);
        str2.push(str[i]);

    }
    return str3 = str2.join(' ');
}

console.log(capStr('Capitalize Every first Letter of each word in a String'));