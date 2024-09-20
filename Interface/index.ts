// object ko represent krne ka 3 tarike hote hai typescript mai 

// ek simple object bnana
// ek interface se banana
// interface newer version of typescript mai aya ha
// Inter face hum object aur classes mai use krte hai jada 

// intrerface is an contract for object shape,it specifies the properteis

// creation of interface


interface info{
    name:string;
    class:string;
}

const student:info={
    name:'nitin',
    class:'Mca',
}


// ?creation of object

const greet:{
    name:string;
    class:string;
    rollnumber:number;
}={
    name:'nitin',
    class:'MCa',
    rollnumber:123
}


// creattion of type alias

type GreetInfo={
    name:string;
    class:string;
    rollnumber:number;
    
}

// use of type alias
const obj:GreetInfo={
    name:"nitin",
    class:"Mca",
    rollnumber:123
}

