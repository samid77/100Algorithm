export function commonCharacterCountRewrite(s1: string, s2: string): number {
    let counter:number = 0;

    const splitS1: string[] = s1.split('');
    const splitS2: string[] = s2.split('');

    let wordCountS1: {[key:string]: any} = getCharList(splitS1);
    let wordCountS2: {[key:string]: any} = getCharList(splitS2);

    console.log(`wordCountS1: ${JSON.stringify(wordCountS1, undefined, 2)}`)
    console.log(`wordCountS2: ${JSON.stringify(wordCountS2, undefined, 2)}`)

    for(const prop in wordCountS1) {
        if(wordCountS2[prop] < wordCountS1[prop]) {
            counter += wordCountS2[prop]
        } else {
            counter += wordCountS1[prop]
        }
    }
    

    return counter;
}

const getCharList = (chars: string[]): object => {
   const wordCount: {[key:string]:any} = {}

   for(let i=0; i < chars.length; i++) {
    if(wordCount.hasOwnProperty(chars[i])) {
        wordCount[chars[i]]++;
    } else {
        wordCount[chars[i]] = 1;
    }
   }

    return wordCount;
}


  
console.log(commonCharacterCountRewrite('aabcc', 'adcaa'));