var numbers = [10, 20, 30, 40, 50];
//doubling each element of the array
var doubleData = numbers.map(function (val) {
    return val * 2;
});
console.log(doubleData);
var conversion = numbers.map(function (val) {
    return val.toString();
});
console.log(conversion.join(""));
