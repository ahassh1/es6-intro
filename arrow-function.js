// function declaration
function sum(sum1, sum2) {
  const total = sum1 + sum2;
  return total;
}
// function expression
const add = function (a, b) {
  return a + b;
};
const result = add(10, 20);
console.log(result);

// arrow function
const addition = (num1, num2) => num1 + num2;
const total = addition(30, 40);
console.log(total);
