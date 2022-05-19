export function pigLatin(str: string): string {

    const letters: string[] = str.split('');
    const vowelRegex: RegExp = /[aiueo]/

    if(vowelRegex.test(letters[0])) return `${str}way`

    while(true) {
        if(vowelRegex.test(letters[0])) letters.push(letters.splice(0,1)[0])

        break;
    }

    str = `${letters.join('')}ay`;

    return str;



}

console.log(pigLatin("glove"));
console.log(pigLatin("eight"));
