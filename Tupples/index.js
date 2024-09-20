"use strict";
// Tupples are a datastructe that allow us for a fixed size of elements
// Jha b fixed size ki bat hori hai vha tupples chlenge
// This is an array
const favCity = ['nepal', 'india', 'bangladesh'];
const person = ['nitin', 18, true];
// const displayPersonInfo:(person:PersonInfo)=>void=(person:PersonInfo):void=>{
// }
const displayPersonInfo = (person) => {
    const [name, age, hasDriverLic] = person;
    console.log(name);
    console.log(age);
    console.log(hasDriverLic);
};
displayPersonInfo(person);
const p1 = ['Bottle', 500, 10];
console.log(p1);
