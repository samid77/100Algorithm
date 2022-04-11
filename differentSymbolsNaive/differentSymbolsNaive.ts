export function differentSymbolsNaive(s: string): number {

    // const uniqueChars: string[] = [];
    // const inputChars: string[] = s.split('');

    // inputChars.forEach(char => {
    //     if(!uniqueChars.includes(char)) {
    //         uniqueChars.push(char);
    //     }
    // });
    

    // return uniqueChars.length;

    // const uniqueChars = {}
    // const inputChars = s.split('');

    // inputChars.forEach((char) => {
    //     uniqueChars[char] = 1;
    // })


    // return Object.keys(uniqueChars).length

    const uniqueChars = new Set();
    const inputChars = s.split('');

    inputChars.forEach(char => {
        uniqueChars.add(char)
    })

    return uniqueChars.size;

}

console.log(differentSymbolsNaive('cabca'));
