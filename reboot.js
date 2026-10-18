const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out odd numbers, then square the remaining even numbers
const result = numbers
  .filter((n) => n % 2 === 0)
  .map((n) => n ** 2);

console.log("Transformed Array:", result);