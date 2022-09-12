const numbers = [
  3, 60, 1, 5, 6, 2, 8, 58, 7, 9, 12, 34, 55, 66, 77, 88, 99, 90, 80, 60, 50,
  20,
];

let obj = {};

for (let i = 0; i < numbers.length; i++) {
  if (!obj[`${numbers[i]}`]) {
    obj[`${numbers[i]}`] = numbers[i];
  } else {
    console.log(numbers[i]);
  }
}
