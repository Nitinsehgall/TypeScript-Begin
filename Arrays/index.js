// in type script their are three ways to define the arrays 
//1) using square brackets
var numbers = [1, 2, 3, 4, 5, 6];
//2)using array constructor
var number1 = new Array(1, 2, 3, 4, 5, 5);
//3) using array.of method
// const naam:string[]=Array.of("Nitin","sehgal")
console.log(numbers[0]);
console.log(number1.length);
console.log;
var fruits = ['apple', 'banana', 'mango'];
var fruitss = ['1', '2', '3'];
fruits.push.apply(fruits, fruitss);
console.log(fruits);
