export function longestDigitsPrefix(inputString: string): string {

    // let digits: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let prefix = '';

    for(let char of inputString) {
        console.log(`char: ${char}`)
        // if(!digits.includes(char)) break;
        // prefix += char

        const num = parseInt(char);
        if(isNaN(num)) break;
    }

    console.log(`prefix: ${prefix}`)
    return prefix

}

console.log(longestDigitsPrefix('123aa1'));
console.log(longestDigitsPrefix('12778899rtaa2829921asakkw39993010022asasa'));
console.log(longestDigitsPrefix('1aa12324242aer3456'));
console.log(longestDigitsPrefix('123aa1223232'));
