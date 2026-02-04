// array maping
const numbers = [1, 2, 3, 4, 5];
const double = [];

for (const num of numbers) {
  const result = num * 2;
  double.push(result);
}
console.log(double);

const doubleIt = (a) => a * 2;
const doubled = numbers.map(doubleIt);
console.log(doubled);

const triple = numbers.map((nums) => nums * 3);
console.log(triple);

const square = numbers.map((n) => n * n);
console.log(square);

const friends = ["abul", "babul", "cabul", "dabul", "sbul"];
const nameLengths = friends.map((friend) => friend.length);
console.log(nameLengths);

const firstName = friends.map((name) => name[0].toUpperCase());
console.log(firstName);

const result = numbers.map((num, index) => {
  console.log(index, num);
  return index;
});
console.log(result);
