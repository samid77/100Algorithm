export function alternatingSums(a: number[]): number[] {
    let evenSum: number = 0;
    let oddSum: number = 0;

    a.forEach((el, idx) => {
        if(idx % 2 === 0) {
            evenSum += el
        } else {
            oddSum += el;
        }
    })

    return [evenSum, oddSum]
}

console.log(alternatingSums([50, 60, 60, 45, 70]))