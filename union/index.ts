// type script mai union ko pipe symbol se use krte hai 
// |




const inputVal=(value:string|number|boolean)=>{
if(typeof value=='string'){
    return value.toUpperCase()
}else if(typeof value=="number"){
    return value*2
}
}

console.log(
inputVal(10));
console.log(
inputVal('helo')
)
inputVal(true)






// Union
type Person={
    name:string;
    age:number;

}

type Employee={
    emp_id:number;
    department:string
}

//Union bnaya 
// union mai 1 complete key value pair bnana pdta ha 
// dusrra half b bna skte ha
// but intersection mai sari details fill krni hoti hai
type EmployeeDetails =Person|Employee


const Employeees:EmployeeDetails={
    name:'niitn',
    age:23,
    emp_id:123,
}


// Intersection
type EmployeeDet =Person & Employee


const myperson:EmployeeDet={
    name:'nitin'
    ,age:20,
    emp_id:123,
    department:"IT"
}


