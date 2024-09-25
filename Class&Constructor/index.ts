// class is like a blueprint 


class Persons{
    name:string;
    age:number;
    hobbies:string[];
    constructor(name:string,age:number,hb:string[]){
        this.name=name;
        this.age=age;
        this.hobbies=hb
        
    }
    introduce():string{
        return `hello my name is ${this.name}`
    }
}

class Student extends Persons{
    grarde :number;
    constructor(name:string,age:number,hb:string[],grade:number){
        super(name,age,hb);
        this.grarde=grade;

        
    }
}

const person1:Persons=new Persons("nitin",123,["str"])
const person2:Persons=new Persons("nitin",123,["str"])
const student:Student=new Student("nitin",23,["12","123"],9)
console.log(person1.introduce());
console.log(person1.hobbies);

console.log(student.introduce());


//creation of a function in the class
class Hobby{

    add(a:number,b:number):number{
            return a+b
    }
}


const h1:Hobby=new Hobby() 

const result=h1.add(10,20)
console.log(result);



// Short hand property of constructor

class Stu{
    constructor(public name:string,public clas:string){
          
    }
}

const s:Stu=new Stu('nitin','MCCA')
console.log(s);
console.log(person1);