export function evenDigitsOnly(n: number): boolean {

    const arrNum: string[] = n.toString().split('');

    return arrNum.every((num) => 
        parseInt(num) % 2 === 0
    )
}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));