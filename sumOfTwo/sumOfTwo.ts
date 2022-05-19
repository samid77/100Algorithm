export function sumOfTwo(a: number[], b: number[], v: number): boolean {

    const hashMap: any = {};
    for(let num of a) {
        const diff = v - num;
        hashMap[diff] = diff;
        console.log(`hashMap: ${JSON.stringify(hashMap)}`)
    }

    for(let num of b) {
        if(hashMap.hasOwnProperty(num)) {
            console.log(`num: ${num}`)
            return true;
        }
    }

    return false


}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));