// single arrow function
const singleArrow = (a) => a * a;
console.log(singleArrow(10));

const firstElement = (arr) => arr[1];
console.log(firstElement([12, 34]));

// multiple arrow function
const doMath = (a, b, c) => {
  const makeDouble = a * 2;
  const againDouble = b * 2;
  const total = makeDouble + makeDouble + c;
  return total;
};
console.log(doMath(23, 34, 45));
const result = doMath(12, 23, 45);
console.log(result);

const multipleArrow = (salary1, salary2) => {
  const totalAmount = salary1 + salary2;
  return totalAmount;
};
console.log(multipleArrow(120000, 230000));

// annymous arrow function
setTimeout(() => {
  console.log("this is annymous arrow function");
}, 3000);

document.getElementById("btnClick").addEventListener("click", () => {
  console.log("button clicked");
});

document.getElementById("click").addEventListener("mouseenter", (event) => {
  console.log("ok done");
});
