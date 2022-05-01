export function missingLetters(str: string): string {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const strAlphabet = alphabet.split('')
    const chars = str.split('');

    if(str === alphabet) {
        return undefined
    }

    for(let i=0; i < chars.length; i++) {
        if(chars[i] !== strAlphabet[i]){
            return strAlphabet[i]
        }
    }
}

console.log(missingLetters("bce"));
console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghjklmno"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));