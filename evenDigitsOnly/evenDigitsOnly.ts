export function evenDigitsOnly(n: number): boolean {

    const charNum: string[] = n.toString().split('');

    return charNum.every((char) => 
        parseInt(char) % 2 === 0
    )


}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));