export function stringsConstruction(a: string, b: string): number {

    const aCount: any = getAlphabetCount(a);
    const bCount: any = getAlphabetCount(b);
    const count = [];

    for(let char in aCount) {
        if(bCount.hasOwnProperty(char)) {
            count.push(Math.floor(bCount[char] / aCount[char]))
        } else {
            return 0;
        }
    }

    return Math.min(...count)


}

const getAlphabetCount = (word: string) => {
    const chars = word.split('');
    const alphabetCount: any = {};
    chars.forEach(c => {
        if(alphabetCount.hasOwnProperty(c)) {
            alphabetCount[c]++;
        } else {
            alphabetCount[c] = 1;
        }
    })

    return alphabetCount;
}

console.log(stringsConstruction('abc', 'abccba'));