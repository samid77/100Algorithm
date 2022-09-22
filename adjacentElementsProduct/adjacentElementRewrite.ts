export function adjacentElementsProduct(inputArray: number[]): number {

    let largestSum:number = inputArray[0] * inputArray[1];
    for(let i=1; i < inputArray.length; i++){
        const currLargest:number = inputArray[i] * inputArray[i + 1];
        largestSum < currLargest ? largestSum = currLargest : largestSum
    }

    return largestSum;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([2, 4, 1, 2, 3, 2]));
