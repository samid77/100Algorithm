export function alphabetSubsequence(stringVal: string): boolean {

    const arrChar: string[] = stringVal.split('');
    const charVal: number[] = [];

    arrChar.forEach(el => {
        charVal.push(el.charCodeAt(0))
    });

    if(new Set(charVal).size !== charVal.length)return false;

    for(let i=0; i < charVal.length - 1; i++){
        if(charVal[i] >= charVal[i + 1])return false;
    }

    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
