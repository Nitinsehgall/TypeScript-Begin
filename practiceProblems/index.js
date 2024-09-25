"use strict";
class BankAccount {
    _balance = 0;
    set setbalance(amt) {
        if (amt > 0) {
            this._balance = amt;
        }
        else {
            throw new Error("Value is less than 0 please enter the amount greater than 0");
        }
    }
    get getbalance() {
        return `update balance is ${this._balance}`;
    }
}
const accountHolder = new BankAccount();
accountHolder.setbalance = 1000;
console.log(accountHolder.getbalance);
accountHolder.setbalance = 1500;
console.log(accountHolder.getbalance);
//this is a use case that will implemented with setter and getter function 
// console.log(accountHolder.setbalance=-20);
package;
CloudAnalogy.pattern;
var java = .util.Scanner;
//ABCDEFGHI
// BCDEFGH
//  CDEFG
//   DEF
//    E
//   DEF
//  CDEFG
// BCDEFGH
//ABCDEFGHI
class pattern9 {
    static void;
    main(String, [], args) {
        for (int; i = 1; i <= 5)
            ;
        i++;
        {
            int;
            Ascii = 64 + i;
            for (int; j = 1; j < i)
                ;
            j++;
            {
                System.out.print(" ");
            }
            for (int; k = i; k <= 10 - i)
                ;
            k++;
            {
                System.out.print((char)(Ascii));
                Ascii++;
            }
            System.out.println();
        }
        //        second
        for (int; i = 4; i >= 1)
            ;
        i--;
        {
            int;
            ascii = 64 + i;
            for (int; j = 1; j < i)
                ;
            j++;
            {
                System.out.print(" ");
            }
            for (int; k = 10 - i; k >= i)
                ;
            k--;
            {
                System.out.print((char)(ascii));
                ascii++;
            }
            System.out.println();
        }
    }
}
