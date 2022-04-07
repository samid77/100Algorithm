export function composeRanges(nums: number[]): string[] {

    if(nums.length < 1) {
        return []
    }

    const ranges: any[] = [{starts: nums[0], ends: nums[0]}]

    for(let i=0; i < nums.length; i++) {
        if(ranges[ranges.length - 1].end + 1 === nums[i]) {
            ranges[ranges.length - 1].end = nums[i]
        } else {
            ranges.push({starts: nums[i], ends: nums[i]});
        }
    }

    for(let j=0; j < ranges.length; j++) {
        if(ranges[j].starts !== ranges[j].ends) {
            ranges[j] = `${ranges[j].starts}->${ranges[j].ends}`
        } else {
            ranges[j] = ranges[j].starts.toString();
        }
    }

    return ranges;
}

console.log(composeRanges([-1, 0, 1, 2, 6, 7, 9]));