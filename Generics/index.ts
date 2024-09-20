// Generics are used for Reusasble components
// generic gives power to work with multiple data types


//? ye simple way se krenge to ese hoga union lgana pdega bar bar type define krne pdenge


// function logAndReturn (value:number|string):number|string{
//     console.log(value);
//     return value
// }
// const numberResult:string|number=logAndReturn(43)

// const stringResult:string|number=logAndReturn("hello world ")
// ?Generic use krne k lie <> ye wala angular braces lagana ha 

// generic mai kuch b pass kr skte hai

function helloWorld<Type>(name:Type):Type{
            return name;
}

console.log(helloWorld('my name is ntinn'));
console.log(helloWorld(123));
console.log(helloWorld(true));


function helloworlda(Name:string){

}
helloworlda('hello')
const addTwo=(num1:String ,num2:number)=>{

    console.log(num1);
}

addTwo("hello world",123)



// generics in typescript

//generic mai ek hi type uthatta ha agr hume dusra type dalna ha same funciton mai to dubara <>ismai define krna hoga
function na<t,c>(a:t,b:c){
    console.log(a,b);
    console.log(typeof a,typeof b);
}


const result=na<string,number>("hello world",123);
