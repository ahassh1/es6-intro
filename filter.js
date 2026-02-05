const studentMarks = [34, 46, 23, 67, 89, 90, 12, 49];
const lessThan50 = studentMarks.filter((mark) => mark < 50);
console.log(lessThan50);
const evenMarks = studentMarks.filter((mark) => mark % 2 === 0);
console.log(evenMarks);
