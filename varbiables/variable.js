//These all are valid type script code 
var num = 10;
var pie = 3.14;
var NegValue = -10;
console.log(num, pie, NegValue);
var Result = num + "years";
console.log(typeof (Result));
var sqrt = Math.sqrt(16);
console.log(sqrt);
var nanValue;
//String concatination
var firstName = "Nitin";
var lastName = "Sehgal";
var finalName = firstName + lastName;
console.log(finalName);
//String length
console.log(finalName.length);
//String conversion to upperCase
console.log(finalName.toUpperCase());
console.log(finalName.toLowerCase());
var isMyNameNitin = true;
console.log(isMyNameNitin);
var isEven = function (a) {
    if (a % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log("Number is " + isEven(11));
var isDivisibleBy4And8 = function (num) {
    if (num % 8 == 0 && num % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isDivisibleBy4And8(40) + " isDivisibleBy4And8");
