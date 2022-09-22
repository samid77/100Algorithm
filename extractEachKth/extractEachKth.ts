export function extractEachKth(inputArray: number[], k: number): number[] {

    inputArray.forEach((el, idx) => {
        console.log((idx + 1)) 
    })
    
    return inputArray.filter((el, idx) => (
        (idx + 1) % k !== 0
    ))
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1));