"use strict";
// class is like a blueprint 
class Persons {
    constructor(name, age, hb) {
        this.name = name;
        this.age = age;
        this.hobbies = hb;
    }
    introduce() {
        return `hello my name is ${this.name}`;
    }
}
class Student extends Persons {
    constructor(name, age, hb, grade) {
        super(name, age, hb);
        this.grarde = grade;
    }
}
const person1 = new Persons("nitin", 123, ["str"]);
const person2 = new Persons("nitin", 123, ["str"]);
const student = new Student("nitin", 23, ["12", "123"], 9);
console.log(person1.introduce());
console.log(person1.hobbies);
console.log(student.introduce());
//creation of a function in the class
class Hobby {
    add(a, b) {
        return a + b;
    }
}
const h1 = new Hobby();
const result = h1.add(10, 20);
console.log(result);
// Short hand property of constructor
class Stu {
    constructor(name, clas) {
        this.name = name;
        this.clas = clas;
    }
}
const s = new Stu('nitin', 'MCCA');
console.log(s);
console.log(person1);
