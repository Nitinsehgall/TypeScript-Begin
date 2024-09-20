"use strict";
// type script mai union ko pipe symbol se use krte hai 
// |
const inputVal = (value) => {
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
const Employeees = {
    name: 'niitn',
    age: 23,
    emp_id: 123,
};
const myperson = {
    name: 'nitin',
    age: 20,
    emp_id: 123,
    department: "IT"
};
