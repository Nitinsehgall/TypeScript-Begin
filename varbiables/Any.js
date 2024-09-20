"use strict";
//  Any Vs unkown
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// any mtlb js jses kam krega 
let myfavNum = 5;
myfavNum = "Nitin sejha";
myfavNum = true;
// unknown :it is a safer alternative for any
let fun = 123;
fun = "hello";
fun = true;
fun = 54;
// unknown mai hum type check kr skte hai
if (typeof fun === "number") {
    console.log(fun + 10);
}
//promise wala data unknown hota ha 
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetch('https://google.com');
        const data = yield result.json();
        return data;
    });
}
console.log();
fetchData();
