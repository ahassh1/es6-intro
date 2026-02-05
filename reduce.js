const studentMarks = [34, 46, 23, 67, 89, 90, 12, 49];
let sum = 0;
for (const mark of studentMarks) {
  sum += mark;
}
console.log(sum);

const total = studentMarks.reduce((acc, curr) => acc + curr, 0);
console.log(total);
