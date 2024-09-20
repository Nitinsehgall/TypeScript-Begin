"use strict";
const numbers = [10, 20, 30, 40, 50];
//doubling each element of the array
const doubleData = numbers.map((val) => {
    return val * 2;
});
console.log(doubleData);
const conversion = numbers.map((val) => {
    return val.toString();
});
console.log(conversion.join(""));
