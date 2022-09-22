export function commonCharacterCount(s1: string, s2: string): number {
    let result:number = 0;
    const arrS1:string[] = s1.split('');
    const arrS2:string[] = s2.split('');
    const charNumS1: {[key:string]:any} = getNumOfChar(arrS1);
    const charNumS2: {[key:string]:any} = getNumOfChar(arrS2);

    for(let val in charNumS1) {
        if(charNumS2.hasOwnProperty(val)) {
            console.log(charNumS1[val])
            console.log(charNumS2[val])
            if(charNumS2[val] < charNumS1[val]){
                result += charNumS2[val]
            } else {
                result += charNumS1[val]
            }
        }
    }
    
    return result;
}

const getNumOfChar = (arr: string[]): object => {
    let numOfChar: {[key: string]:any} = {}
    for(let i=0; i < arr.length; i++) {
        if(numOfChar[arr[i]]) {
            numOfChar[arr[i]]++
        } else {
            numOfChar[arr[i]] = 1;
        }
    }

    return numOfChar;

}


  
console.log(commonCharacterCount('aabcc', 'adcaa'));