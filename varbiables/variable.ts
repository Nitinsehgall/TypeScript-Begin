//These all are valid type script code 
let num:Number=10;
let pie:Number=3.14;
let NegValue:Number=-10


console.log(num,pie,NegValue);



let Result:any =num+"years"
console.log(typeof(Result));


let sqrt:number=Math.sqrt(16)

console.log(sqrt);

let nanValue:number


//String concatination
let firstName:string="Nitin"
let lastName:string="Sehgal"
let finalName=firstName+lastName
console.log(finalName);




//String length
console.log(finalName.length);

//String conversion to upperCase
console.log(finalName.toUpperCase());
console.log(finalName.toLowerCase());



let isMyNameNitin:boolean=true
console.log(isMyNameNitin);



const isEven=(a:number):boolean=>{
   if(a%2==0){
    return true
   }else{
    return false
   }
}

console.log("Number is "+isEven(11));



const isDivisibleBy4And8=(num:number)=>{
if(num%8==0 && num%4==0){
    return true
}else{
    return false
}
}


console.log(isDivisibleBy4And8(40) +" isDivisibleBy4And8");


//bigInt type
// iska mtlb hai kii bda number le skte hai interger se6
let number:bigint=9007199254740991n
console.log(number);