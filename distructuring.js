// array distructuring
const marks = [67, 78, 88, 98, 87, 56];
const [num1, num2, num4] = marks;
console.log(num1, num4);
console.log(marks[0], marks[1]);

// object distructuring
const studentData = {
  name: "Polash",
  salary: 30000,
  age: 24,
  id: 85,
};
const studentData2 = {
  name: "ahasan",
  salary: 20000,
  age: 23,
  id: 81,
};
const { name, age, salary, ...restData } = studentData;
console.log(salary);
console.log(studentData2.name);
