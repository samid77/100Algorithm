export function firstDigit(inputString: string): string {
    const digits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const charArr: string[] = inputString.split('')

    for(let i=0; i < inputString.length; i++) {
        if(digits.includes(inputString[i])) {
            return inputString[i]
        }
    }

}

console.log(firstDigit('var_1__Int'));
console.log(firstDigit('q2q-q'));
console.log(firstDigit('0ss'));
