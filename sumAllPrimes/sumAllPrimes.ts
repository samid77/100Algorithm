export function sumAllPrimes(num: number): number {

    let primesTotal = 0;
    for (let i=2; i < num; i++) {
        for (let j=2; j <= i; j++) {
            console.log(`i: ${i}`)
            console.log(`j: ${j}`)
            if (i === j) {
                primesTotal += i;
                console.log(`primesTotal: ${primesTotal}`)
            }

            if(i % j === 0) {
                console.log(`break`)
                console.log(`========`)
                break;
            }
        }
    }


    return primesTotal;
}

console.log(sumAllPrimes(10));
// console.log(sumAllPrimes(977));