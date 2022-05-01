export function palindromeRearranging(inputString: string): boolean {

    const charArr: string[] = inputString.split('');
    const letterObj: any = {};
    let oddCount = 0;

    for(let i=0; i < charArr.length; i++) {
        if(letterObj.hasOwnProperty(charArr[i])) {
            letterObj[charArr[i]]++;
        } else {
            letterObj[charArr[i]] = 1
        }
    }

    console.log(letterObj)

    for(let key in letterObj) {
        if(letterObj[key] % 2 !== 0) {
            console.log(key)
            oddCount++;
        }
    }

    console.log(`oddCount: ${oddCount}`)
    console.log(`========`)

    return oddCount > 1 ? false : true;

}

console.log(palindromeRearranging('aabb'));
console.log(palindromeRearranging('reviver'));
console.log(palindromeRearranging('civil'));