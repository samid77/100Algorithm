export function integerToStringOfFixedWidth(number: number, width: number): string {

    let stringifiedNum:string = number.toString();
    const numWidth = stringifiedNum.length;
    const widthDiff = width - numWidth

    if(numWidth < width) {
        let padStart = '';

        for(let i=0; i < widthDiff; i++) {
            padStart = padStart.concat('0');
        }

        console.log(`padStart: ${padStart}`)

        return padStart.concat(stringifiedNum)
    }

    if(numWidth > width) {
        return stringifiedNum.substring(Math.abs(widthDiff), stringifiedNum.length)
    }

    return stringifiedNum;
}

console.log(integerToStringOfFixedWidth(1234, 2));
console.log(integerToStringOfFixedWidth(1234, 4));
console.log(integerToStringOfFixedWidth(1234, 5));
console.log(integerToStringOfFixedWidth(1234, 6));
