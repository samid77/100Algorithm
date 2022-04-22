export function largestNumber(n: number): number {

    let word: string = ''

    // for(let i=0; i < n; i++){
    //     word = word.concat('9');
    // }

    // return parseInt(word);

    word = '9'
    return parseInt(word.repeat(n));
}

console.log(largestNumber(2));
console.log(largestNumber(4));