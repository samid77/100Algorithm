export function romanNumeralConverter(num: number): string {

    let roman: string = '';
    let romanNumeral: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let numbers: number[] = [1000,900,500,400,100,90,50,40,10,9,5,4,1];


    return roman;

    
}

console.log(romanNumeralConverter(12));
console.log(romanNumeralConverter(5));
console.log(romanNumeralConverter(101));
