const employees = [
  { id: 1, name: "polash", salary: 30000, dept: "IT" },
  { id: 2, name: "jamal", salary: 25000, dept: "HR" },
  { id: 3, name: "rahim", salary: 40000, dept: "IT" },
  { id: 4, name: "karim", salary: 35000, dept: "Finance" },
  { id: 5, name: "sakib", salary: 50000, dept: "IT" },
];
const totalSalary = employees.map((employee) => employee.salary * 5);
console.log(totalSalary);
const totalSalary1 = employees.forEach((employee) => {
  const salary = employee.salary * 5;
  console.log(salary);
});

const hugeSalary = employees.filter((employee) => employee.salary > 30000);
console.log(hugeSalary);

const hugeSalary1 = employees.find((employee) => employee.salary > 30000);
console.log(hugeSalary1);
