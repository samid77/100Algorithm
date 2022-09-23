export function adjacentElementsProduct(inputArray: number[]): number {

   let largestProduct:number = inputArray[0] * inputArray[1];

   for(let i=0; i < inputArray.length - 1; i++) {
    const currMultiple: number = inputArray[i] * inputArray[i + 1];
    largestProduct = largestProduct < currMultiple ? currMultiple : largestProduct;

   }

   return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([2, 4, 1, 2, 6, 3, 2]));
