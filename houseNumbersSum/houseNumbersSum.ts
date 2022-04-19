export function houseNumbersSum(inputArray: number[]): number {

    let result = 0;
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === 0) {
            return result;
        }

        result += inputArray[i]
    }
}

console.log(houseNumbersSum([5, 1, 2, 3, 0, 1, 5, 0, 2]));