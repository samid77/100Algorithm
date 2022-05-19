export function seatsInTheater(nCols: number, nRows: number, col: number, row: number): number {

    let colDiffs = nCols - col + 1;
    let rowDiffs = nRows - row;
    
    return colDiffs *  rowDiffs;
}

console.log(seatsInTheater(16, 11, 5, 3));