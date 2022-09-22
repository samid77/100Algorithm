export function firstDigit(inputString: string): string {

    const digits:string[] = ['1','2','3','4','5','6','7','8','9','0']
    let result:string = '';

    for(let i=0; i < inputString.length; i++) {
        if(digits.includes(inputString[i])) {
            result = inputString[i];
        }
    }
    
    return result;

}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
