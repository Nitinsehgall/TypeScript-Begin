interface product {
  name: string;
  price: number;
  quantity: number;
}

const p1: product = {
  name: "Laptop",
  price: 1000,
  quantity: 5,
};

const calculateTotalPrice = (p1:product): number => {
  return p1.price * p1.quantity;
};


console.log(calculateTotalPrice(p1));
