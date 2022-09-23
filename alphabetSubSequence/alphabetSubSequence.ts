export function alphabetSubsequence(s: string): boolean {

    const chars: string[] = s.split('');
    const charsValue: number[] = [];

    chars.forEach((c: string) => {
        charsValue.push(c.charCodeAt(0))
    })

    console.log(charsValue);
    console.log(new Set(charsValue))
    console.log(new Set(charsValue).size)

    if(new Set(charsValue).size !== charsValue.length) return false;

    for(let i=0; i < charsValue.length - 1; i++) {
        if(charsValue[i] >= charsValue[i + 1]) return false;
    }

    return true;
}

// console.log(alphabetSubsequence('zab'))
// console.log(alphabetSubsequence('effg'))
// console.log(alphabetSubsequence('cdce'))
// console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
