export function properNounCorrection(noun: string): string {

    const firstChar = noun[0].toUpperCase();
    const restChars = noun.slice(1, noun.length).toLowerCase();

    return firstChar.concat(restChars);


}

console.log(properNounCorrection('pARiS'));
console.log(properNounCorrection('John'));