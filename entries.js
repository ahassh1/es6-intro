const employee = {
  name: "ahasan",
  salary: 20000,
  age: 24,
  designation: "developer",
};
const key = Object.keys(employee);
const value = Object.values(employee);
const entrie = Object.entries(employee);
console.log(entrie);
console.log(key, value);

employee.location = "Dhaka";
employee.salary = employee.salary + 10000;

const seal = Object.seal(employee);
console.log(seal);

const freeze = Object.freeze(employee);
console.log(freeze);

delete employee.age;
console.log(employee);
