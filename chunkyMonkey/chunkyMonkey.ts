export function chunkyMonkey(arr: any[], size: number): any[][] {

    const result = [];
    let count = 0;

    while(count < arr.length) {
      result.push(arr.slice(count, count+=2))
    }

    return result;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));