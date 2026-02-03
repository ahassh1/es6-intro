// array spread
const polashMarks = [67, 78, 88, 98, 87, 56];
const newPolashMarks = [76, 78, 89, ...polashMarks, 65];
newPolashMarks.push(99, 86);
newPolashMarks.pop();
console.log(newPolashMarks);
console.log(...newPolashMarks);
const maxMark = Math.max(...polashMarks);
console.log(maxMark);

// object spread
const student = {
  name: "Polash",
  id: 85,
  age: 23,
};
const newStudent = { subject: "English", city: "Dhaka", ...student };
console.log(newStudent);
