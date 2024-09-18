const numbers: number[] = [10, 20, 30, 40, 50];

//doubling each element of the array
const doubleData: number[] = numbers.map((val: number) => {
  return val * 2;
});

console.log(doubleData);

const conversion: string[] = numbers.map((val: number) => {
  return val.toString();
});

console.log(conversion.join(""));
