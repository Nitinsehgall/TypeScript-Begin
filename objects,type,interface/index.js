"use strict";
//
// structure bnana ha object ka
let list = {
    name: "nitin",
    rollno: 123,
    address: {
        city: "ynr",
        count: "ind",
    },
};
list["address"];
const p1 = {
    name: 'Speaker',
    price: 500,
    quatity: 5
};
const { price, quatity } = p1;
const calculateTotalPrice = (price, quatity) => {
    return price * quatity;
};
calculateTotalPrice(price, quatity);
