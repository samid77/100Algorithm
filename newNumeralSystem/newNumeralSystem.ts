export function newNumeralSystem(number: string): string[] {

    const numerals: string[] = [];
    let startCharCount = 65;
    let endCharCount = number.charCodeAt(0)

    while(startCharCount <= endCharCount) {
        console.log(`endCharCount: ${endCharCount}`)
        console.log(`startCharCount: ${startCharCount}`)
        console.log(`==================`)
        const numeral = `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--;
    }

    return numerals;
}

console.log(newNumeralSystem('G'));