"use strict";
const p1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5,
};
const calculateTotalPrice = (p1) => {
    return p1.price * p1.quantity;
};
console.log(calculateTotalPrice(p1));
