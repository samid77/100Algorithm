export function findClosestPair(numbers: number[], sum: number): number {

    let distance = -1;

    for(let i=0; i < numbers.length; i++) {
        for(let j=i+1; j < numbers.length - 1; j++) {
            const tempSum = numbers[i] + numbers[j];
            const tempDistance = Math.abs(i - j)

            if(sum === tempSum) {
                if(distance === -1 || tempDistance < distance) {
                    distance = tempDistance
                }
            }
        }
    }


    return distance;
}

console.log(findClosestPair([1, 0, 2, 4, 3, 0], 5));
console.log(findClosestPair([2, 3, 7], 8));