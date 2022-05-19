export function sumOddFibonacciNums(num: number): number {

    let result = 0;
    let prevNumber = 0;
    let currentNumber = 1;

    while(currentNumber <= num) {
        if(currentNumber % 2 !== 0) {
            result += currentNumber
        }

        const nextCurrent = currentNumber += prevNumber
        prevNumber = currentNumber
        currentNumber = nextCurrent
    }

    return result;

}

console.log(sumOddFibonacciNums(1000));
// console.log(sumOddFibonacciNums(4000000));
console.log(sumOddFibonacciNums(10));
