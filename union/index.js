// type script mai union ko pipe symbol se use krte hai 
// |
var inputVal = function (value) {
    if (typeof value == 'string') {
        return value.toUpperCase();
    }
    else if (typeof value == "number") {
        return value * 2;
    }
};
console.log(inputVal(10));
console.log(inputVal('helo'));
inputVal(true);
