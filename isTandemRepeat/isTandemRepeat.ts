export function isTandemRepeat(inputString: string): boolean {

    const wordLength = inputString.length;

    if(wordLength % 2 === 0) {
        const firstHalf = inputString.slice(0, wordLength/2);
        const secondHalf = inputString.slice(wordLength/2, wordLength)

        return firstHalf === secondHalf;
    }

    return false;
}

console.log(isTandemRepeat('tandemtandem'))
console.log(isTandemRepeat('qqq'))
console.log(isTandemRepeat('2w2ww'))
