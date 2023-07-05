export function differentSymbolsNaive(s: string): number {

    const uniqueChars:string[] = [];
    const arrS:string[] = s.split('');

    arrS.forEach((char) => {
        if(!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    })

    return uniqueChars.length;

    /** Second Solution */
    // const uniqueChars = new Set();
    // const arrS:string[] = s.split('');

    // arrS.forEach((char) => {
    //     uniqueChars.add(char);
    // })

    // console.log(uniqueChars)

    // return uniqueChars.size



}

console.log(differentSymbolsNaive('cabca'));
