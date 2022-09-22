export function chunkyMonkey(arr: string[]|number[], size: number) {

  const result: any[] = []
  let count: number = 0;

  while(count < arr.length) {
    console.log(count)
    result.push(arr.slice(count, count += size))
  }

  return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
// console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));