// Tupples are a datastructe that allow us for a fixed size of elements

// Jha b fixed size ki bat hori hai vha tupples chlenge

// This is an array

const favCity:any[]=['nepal','india','bangladesh']

// this is a typple
type PersonInfo=readonly[string,number,boolean]

const person:PersonInfo=['nitin',18,true]

// const displayPersonInfo:(person:PersonInfo)=>void=(person:PersonInfo):void=>{



// }

const displayPersonInfo=(person:PersonInfo):void=>{
    const [name,age,hasDriverLic]=person;
    console.log(name);
    console.log(age);
    console.log(hasDriverLic);
}

displayPersonInfo(person)



type product=readonly[string,number,number]


const p1:product=['Bottle',500,10]

console.log(p1);