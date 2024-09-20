"use strict";
// Normal function
// if we will not write return in the funciton then it will make the default value as void
function names(a, b) { }
// Arrow function
const greet = (name, age) => {
    console.log("Hello " + name + ",i know your age is " + age);
};
greet("nitin", 1);
//write a function isPalindrome
const isPalindrome = (str) => {
    let s = str.split('').reverse().join("");
    if (s == str) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isPalindrome("nitin"));
//average in typescript
let arr = [10, 2, 3, 4, 5];
const calculateAverage = (arVal) => {
    const sum = arVal.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0);
    return sum / arVal.length;
};
calculateAverage(arr);
//Default parameters in function age is 18 
let hp = (name, age = 18) => {
    console.log(`my name is ${name} and my age is ${age}`);
};
hp('nitin');
//option parameter -agar man hai to arguments dedo nhi to b chl jega 
// denote with the question mark  variablename?:type
function nana(name) {
    console.log();
}
nana();
