export function sortByHeight(a: number[]): number[] {
    const sortedArr = a.filter(e => {
        if(e !== -1) return e;
    }).sort((a,b) => a-b)

    let adjustedIdx = 0;
    for(let i=0; i < a.length; i++) {
        if(a[i] !== -1) {
            a[i] = sortedArr[adjustedIdx]
            adjustedIdx++;
        }
    }

    return a;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));