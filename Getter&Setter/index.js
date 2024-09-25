"use strict";
class St {
    constructor(name) {
        this.name = name;
        this._age = 0;
    }
    set age(age) {
        if (age > 150 || age < 0) {
            throw new Error("Age is not valid");
        }
        this._age = age;
    }
    get age() {
        return this._age;
    }
}
const p = new St('Nitin');
p.age = 102;
console.log(p);
console.log(p.age); // Use the getter to access the age
