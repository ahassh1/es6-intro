// array looping
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const number of numbers) {
  console.log(number);
}

// object looping
const teachersData = {
  name: "John Doe",
  age: 30,
  subject: "Mathematics",
};
for (const value in teachersData) {
  console.log(teachersData[value]);
}
