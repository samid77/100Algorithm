export function allLongestStrings(inputArray: string[]): string[] {
    let longestLength:number = 0;
    let longestWords:string[] = [];

    inputArray.forEach(word => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    })

    inputArray.forEach(word => {
        if(word.length === longestLength) longestWords.push(word);
    })


    return longestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
console.log(allLongestStrings(["Dimas", "Septyanto", "Putro"]));