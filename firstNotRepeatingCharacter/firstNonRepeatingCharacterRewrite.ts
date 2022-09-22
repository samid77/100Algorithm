export function firstNotRepeatingCharacter(s: string): string {
    const charArr:string[] = s.split('');
    let result: string = '_';
    let duplicateObj: any = {};
    let maxIndex: number = Number.MAX_SAFE_INTEGER;

    charArr.forEach((el, idx) => {
        if(!duplicateObj.hasOwnProperty(el)){
            duplicateObj[el] = {
                count: 1,
                index: idx,
            }
        } else {
            duplicateObj[el].count++;
            duplicateObj[el].index = idx;
        }
        // console.log(`duplicateObj: ${JSON.stringify(duplicateObj, undefined, 2)}`)
        // console.log(`======================`)
    })

    for(const val in duplicateObj) {
        if(duplicateObj[val].count === 1 && duplicateObj[val].index < maxIndex) {
            result = val;
            maxIndex = duplicateObj[val].index
        }
    }



    return result;
}

console.log(firstNotRepeatingCharacter('abzacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
