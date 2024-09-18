// Normal function
// if we will not write return in the funciton then it will make the default value as void
function names(a, b) { }
// Arrow function
var greet = function (name, age) {
    console.log("Hello " + name + ",i know your age is " + age);
};
greet("nitin", 1);
//write a function isPalindrome
var isPalindrome = function (str) {
    var s = str.split('').reverse().join("");
    if (s == str) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isPalindrome("nitin"));
