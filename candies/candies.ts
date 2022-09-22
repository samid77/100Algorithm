export function candies(n: number, m: number): number {
  const candy = Math.floor(m / 3);
  console.log(candy);

  return candy * n
}

console.log(candies(3, 10));
console.log(candies(2, 10));
