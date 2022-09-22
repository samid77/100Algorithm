export function addTwoDigits(n: any): number {

    const num = n.toString().split('');

    return num.reduce((a,b) => {
        return parseInt(a) + parseInt(b);
    })
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(82));