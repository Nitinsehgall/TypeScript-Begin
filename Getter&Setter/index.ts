class St {
    private _age: number = 0;
    constructor(public name: string) {}
    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("Age is not valid");
        }
        this._age = age;  
    }

    public get age(): number {
        return this._age; 
    }
}

const p: St = new St('Nitin');

p.age = 102;
console.log(p);
console.log(p.age);  // Use the getter to access the age
