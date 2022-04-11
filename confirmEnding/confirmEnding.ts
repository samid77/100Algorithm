export function confirmEnding(str: string, target: string): boolean {
    const gap = str.length - target.length;

    // return str.substr(gap, str.length) === target
    console.log(str.substring(gap))
    return str.substring(gap) === target
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));