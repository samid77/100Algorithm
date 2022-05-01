export function matrixElementsSum(matrix: any[][]): number {

    let result = 0;
    const bannedIdx: number[] = [];

    for(let i=0; i < matrix.length; i++) {
        for(let j=0; j < matrix[i].length; j++) { 
            if(matrix[i][j] === 0) {
                console.log(`j: ${j}`)
                bannedIdx.push(j);
            } else if(!bannedIdx.includes(j)) {
                console.log(`matrix: ${matrix[i][j]}`)
                result += matrix[i][j]
            }
            console.log(`=============`)
        }
    }

    return result;

}

console.log(matrixElementsSum(
    [[0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]]
));
