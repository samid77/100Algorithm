export function addTwoDigits(n: any): number {

    const nums = n.toString().split('');

    return nums.reduce((a,b) => {
        return parseInt(a) + parseInt(b);
    })
}

console.log(addTwoDigits(29));