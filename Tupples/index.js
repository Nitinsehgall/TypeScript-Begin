// Tupples are a datastructe that allow us for a fixed size of elements
// Jha b fixed size ki bat hori hai vha tupples chlenge
// This is an array
var favCity = ['nepal', 'india', 'bangladesh'];
var person = ['nitin', 18, true];
// const displayPersonInfo:(person:PersonInfo)=>void=(person:PersonInfo):void=>{
// }
var displayPersonInfo = function (person) {
    var name = person[0], age = person[1], hasDriverLic = person[2];
    console.log(name);
    console.log(age);
    console.log(hasDriverLic);
};
displayPersonInfo(person);
var p1 = ['Bottle', 500, 10];
console.log(p1);
