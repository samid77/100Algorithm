export function digitDegree(n: number): number {

    let count = 0;
    let currentNumber = n;
    
    if(n <= 9) {
        return count;
    } else {
        while(true) {
            count++;
            currentNumber = getDigit(currentNumber)

            if(currentNumber <= 9) {
                break;
            }
        }
    }

    return count;

}

function getDigit(num: number) {
    const nums: number[] = num.toString().split('').map((el) => parseInt(el));

    return nums.reduce((a,b) => {
        return a + b;
    })
}

console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));