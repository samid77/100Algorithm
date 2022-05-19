export function uniqueDigitProducts(a: number[]): number {
    const distinctProduct: number[] = [];
    a.forEach((digit) => {
        const totalDigit = getTotalDigit(digit);
        console.log(`totalDigit: ${totalDigit}`)
        if(!distinctProduct.includes(totalDigit)) distinctProduct.push(totalDigit)
    })

    return distinctProduct.length
}

const getTotalDigit = (num: number) => {
    const arrDigits: string[] = num.toString().split('');
    let total = 1;
    arrDigits.forEach(d => {
        total *= parseInt(d);
    })

    return total;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));