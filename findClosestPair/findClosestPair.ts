export function findClosestPair(numbers: number[], sum: number): number {

    let distance = -1;

    for(let i=0; i < numbers.length; i++) {
        console.log(`numbers[i]: ${numbers[i]}`)
        for(let j=i+1; j < numbers.length - 1; j++) {
            console.log(`numbers[j]: ${numbers[j]}`)
            console.log(`${numbers[i]} + ${numbers[j]}: ${numbers[i] + numbers[j]}`)
            console.log(`i(${i})-j(${j}): ${Math.abs(i - j)}`)
            console.log(`-----------------------`)
            const tempSum = numbers[i] + numbers[j];
            const tempDistance = Math.abs(i - j)

            if(sum === tempSum) {
                if(distance === -1 || tempDistance < distance) {
                    distance = tempDistance
                }
            }
        }
        console.log(`==================`)
    }


    return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
// console.log(findClosestPair([2, 3, 7], 8));