export function areSimilar(a: number[], b: number[]): boolean {
    let poolA: number[] = [];
    let poolB: number[] = [];

    if(a.toString() === b.toString()) return true;

    for(let i=0; i < a.length; i++) {
        console.log(a[i])
        if(a[i] !== b[i]) {
            poolA.push(a[i]);
            poolB.push(b[i]);
        }
    }

    poolB = poolB.reverse();
    console.log(poolB)
    console.log(poolA)

    if(poolA.length === 2 && poolA.toString() === poolB.toString()) return true;

    return false;


}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
