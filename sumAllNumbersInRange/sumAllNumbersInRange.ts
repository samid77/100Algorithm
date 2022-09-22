export function sumAllNumbersInRange(inputArray: number[]): number {

    let max:number = Math.max.apply(null, inputArray);
    let min:number = Math.min.apply(null, inputArray);
    let range: number = max - min;
    let total:number = 0;
    console.log(range)

    for(let i=1; i < range; i++) {
        total += min + i
        console.log(i)
        console.log(total)
        console.log(min)
    }

    console.log(total)

    total = total + max + min
    

    return total;
    
}

console.log(sumAllNumbersInRange([1,4]))
console.log(sumAllNumbersInRange([4,1]))
console.log(sumAllNumbersInRange([5,10]))