class BankAccount {
    private _balance=0;

    public set setbalance(amt:number){
        if(amt>0){
            this._balance=amt

        }  else{
            throw new Error("Value is less than 0 please enter the amount greater than 0")
        }

         
    }
    public get getbalance(){
        return `update balance is ${this._balance}`
    }
}



const accountHolder:BankAccount=new BankAccount()

accountHolder.setbalance=1000;
console.log(accountHolder.getbalance);

accountHolder.setbalance=1500;

console.log(accountHolder.getbalance);

//this is a use case that will implemented with setter and getter function 
// console.log(accountHolder.setbalance=-20);









