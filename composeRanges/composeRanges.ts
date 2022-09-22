export function composeRanges(nums: number[]): string[] {

    if(nums.length < 1) return []

    const ranges: any[] = [{start: nums[0], end: nums[0]}]

    for(let i=1; i < nums.length; i++) {
        if(ranges[ranges.length - 1].end + 1 === nums[i]) {
            ranges[ranges.length - 1].end = nums[i]
        } else {
            ranges.push({start: nums[i], end: nums[i]});
        }
    }

    console.log(ranges)


    for(let j=0; j < ranges.length; j++) {
        if(ranges[j].start !== ranges[j].end) {
            ranges[j] = `${ranges[j].start}->${ranges[j].end}`
        } else {
            ranges[j] = ranges[j].start.toString();
        }
    }

    return ranges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));