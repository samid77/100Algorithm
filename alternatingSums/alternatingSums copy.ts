export function alternatingSums(a: number[]): number[] {
    let evenSum: number = 0;
    let oddSum: number = 0;

    a.forEach((num, idx) => {
        if(idx % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }

        // if(idx % 2 === 0) evenSum += num
        // oddSum += num
    })

    return [evenSum, oddSum]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))