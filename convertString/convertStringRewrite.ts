export function convertString(s: string, t: string): boolean {

    let matchedWord:string = '';
    let tIdx:number = 0;

    for(let i=0; i < s.length; i++) {
        console.log(s[i])
        console.log(t[tIdx])
        if(s[i] === t[tIdx]) {
            console.log(s[i])
            console.log(t[tIdx])
            matchedWord = matchedWord.concat(s[i])
            tIdx++
        }

        if(matchedWord === t)  return true;
    }

    console.log(matchedWord)

    return false;
}

console.log(convertString('ceoydefthf5iyg5h5yts', 'codefights'));
console.log(convertString('addbyca', 'abcd'));