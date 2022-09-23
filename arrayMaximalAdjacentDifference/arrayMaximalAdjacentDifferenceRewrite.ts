const arrayMaximalAdjacentDifferenceRewrite = (inputArray: number[]): number => {

  let maxDiff: number = inputArray[0] - inputArray[1];
  for(let i=0; i < inputArray.length; i++) {
    let absDiff: number = Math.abs(inputArray[i-1] - inputArray[i]);
    if(absDiff > maxDiff) maxDiff = absDiff;
  }

  return maxDiff;


}

console.log(arrayMaximalAdjacentDifferenceRewrite([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifferenceRewrite([3, 9, 1, 2]));