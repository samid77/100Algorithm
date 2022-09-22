export function absoluteValuesSumMinimization(a: number[]): number {
    
    const isEven: boolean = a.length % 2 === 0;

    if(isEven) return a[a.length/2-1];
    return a[Math.floor(a.length/2)]


}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
console.log(absoluteValuesSumMinimization([1, 2, 3, 4, 5, 6]));