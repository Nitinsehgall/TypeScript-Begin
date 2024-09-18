// Normal function

// if we will not write return in the funciton then it will make the default value as void
function names(a: number, b: number) {}

// Arrow function
const greet = (name: string, age: number): any => {
  console.log("Hello " + name + ",i know your age is " + age);
};

greet("nitin", 1);

//write a function isPalindrome

const isPalindrome = (str) :boolean=> {
 

   let s= str.split('').reverse().join("")
   
   if(s==str){
    return true
   }else{
    return false
   }
};
console.log(isPalindrome("nitin"));



//average in typescript
let arr:Array<number>=[10,2,3,4,5]

const calculateAverage=(arVal:Array<number>)=>{
      const sum=  arVal.reduce((accumulator:number,currentValue:number)=>{
        return accumulator + currentValue;

        },0)
        return sum/arVal.length;
}

calculateAverage(arr)




//Default parameters in function age is 18 
let hp=(name:string,age:number=18):void=>{
  console.log(`my name is ${name} and my age is ${age}`);
}



hp('nitin')


//option parameter -agar man hai to arguments dedo nhi to b chl jega 
// denote with the question mark  variablename?:type
function nana(name?:string){
console.log();
}

nana()