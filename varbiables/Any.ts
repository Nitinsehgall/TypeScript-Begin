//  Any Vs unkown

// any mtlb js jses kam krega 
let myfavNum:any=5;
myfavNum="Nitin sejha"
myfavNum=true;


// unknown :it is a safer alternative for any


let fun:unknown=123;

fun="hello"
fun =true
fun=54


// unknown mai hum type check kr skte hai

if (typeof fun==="number"){
    console.log(fun+10);
}

//promise wala data unknown hota ha 


async function fetchData() :Promise<any>{
    const result =await fetch('https://google.com')
    const data=await result.json()
    return data 
}

console.log();
fetchData()