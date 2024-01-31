let str = 'If a given string has either x, replace x by y. if the given string has X, replace it by Y.';
let strMod = str.replace(/x/g, 'y').replace(/X/g, 'Y');
console.log(strMod);