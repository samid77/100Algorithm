export const twoSum = (nums:number[], target: number): number[] => {

    let result: number[] = [];
    // let storage = {};    
    // for(let [idx, val] of nums.entries()) {
    //     if(storage[val] !== undefined) {
    //         return [storage[val], idx]
    //     } else {
    //         storage[target - val] = idx;
    //     }
    // }
    // console.log(storage)

    // return [];

    /** 2nd solution */
    // for(let i=0; i < nums.length; i++) {
    //     for(let j=i+1; j < nums.length; j++) {
    //         console.log(nums[i])
    //         console.log(nums[j])
    //         if(nums[i] + nums[j] === target) {
    //             result.push(i, j);
    //         }
    //     }
    // }

    const objNum = {};
    nums.forEach((val, idx) => {
        objNum[val] = idx;
    })
    console.log(objNum)
    for(let i=0; i < nums.length; i++) {
        const complement = target - nums[i]
        console.log(complement);
        console.log(objNum[complement])
        if(objNum[complement] !== undefined && objNum[complement] !== i) {
            return [i, objNum[complement]]
        }
    }

    return result;
    
}
  
  console.log(twoSum([2,7,11,15], 9));