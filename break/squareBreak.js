let i = 1;

while (i >= 1) {
    console.log(i);
    if (i - 1 > Math.sqrt(i)) {
        break;
    }
    i++;
}