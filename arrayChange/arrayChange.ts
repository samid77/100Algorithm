export function arrayChange(inputArray: number[]): number {

    let count = 0;
    for(let i=0; i < inputArray.length; i++) {
        console.log(inputArray[i])
        console.log(inputArray[i + 1])
        if(inputArray[i] >= inputArray[i + 1]) {
            const diff = (inputArray[i] + 1) - inputArray[i + 1];
            console.log(diff)
            inputArray[i + 1] = inputArray[i] + 1
            count += diff;
        }
    }

    return count;
}

console.log(arrayChange([1, 1, 1]));