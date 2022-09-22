export function extractMatrixColumn(matrix: number[][], column: number): number[] {

    const result:number[] = [];
    matrix.forEach((arrNum) => result.push(arrNum[column]))

    return result;
}

console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]], 2));