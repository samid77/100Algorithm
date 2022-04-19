export function firstDuplicate(a: number[]): number {

        const firstDup: any = {}
        for(let num of a) {
            if(firstDup.hasOwnProperty(num)) {
                console.log(`1st: ${num}`)
                return num;
            } else {
                console.log(`2nd: ${num}`)
                firstDup[num] = num;
            }
            console.log(`firstDup: ${JSON.stringify(firstDup)}`)
            console.log(`====================================`)
        }

        return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));
