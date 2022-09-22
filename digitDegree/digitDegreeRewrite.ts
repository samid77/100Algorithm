export function digitDegree(n: number): number {

    let count:number = 0;
    let currentNumber:number = n;

    if(n <= 9) return count;

    while(true) {
        count++;
        currentNumber = getDigit(currentNumber)
        console.log(currentNumber)
        if(currentNumber <= 9) break;
        
    }

    return count;

}

const getDigit = (num: number):number => {
    let arrNum:number[] = num.toString().split('').map(num => parseInt(num));

    return arrNum.reduce((a,b) => a + b);
}





console.log(digitDegree(5));
console.log(digitDegree(10));
console.log(digitDegree(91));