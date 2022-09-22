export function composeRanges(nums: number[]): string[] {

    if(nums.length < 1) return []
    const arrRanges: any[] = [{start: nums[0], end: nums[0]}]

    for(let i=1; i < nums.length; i++) {
        if(arrRanges[arrRanges.length - 1].end + 1 === nums[i]) {
            arrRanges[arrRanges.length - 1].end = nums[i]
        } else {
            arrRanges.push({start: nums[i], end: nums[i]})
        }
    }

    for(let j=0; j < arrRanges.length; j++) {
        if(arrRanges[j].start !== arrRanges[j].end){
            arrRanges[j] = `${arrRanges[j].start}->${arrRanges[j].end}`
        } else {
            arrRanges[j] = arrRanges[j].start.toString();
        }
    }

    
    console.log(arrRanges)
    return arrRanges;


}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));