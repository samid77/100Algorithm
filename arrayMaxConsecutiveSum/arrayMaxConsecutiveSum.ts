const arrayMaxConsecutiveSum = (inputArray, k) => {
  // let i = 0;
  // let highest = 0;

  // while(i < inputArray.length) {
  //   if(!isNaN(inputArray[i] + inputArray[i + 1])) {
  //     if(inputArray[i] + inputArray[i + 1] > highest) {
  //       highest = inputArray[i] + inputArray[i + 1]
  //     }
  //   }
  //   i++;
  // }

  // return highest

  /** Second Solution */

  let sum: number = 0;
  let max: number = 0;

  for(let i=0; i < k; i++) { 
    console.log(inputArray[i])
    sum += inputArray[i];
  }
  console.log(sum)

  max = sum;

  for(let i=k; i < inputArray.length; i++) {
    console.log(inputArray[i])
    sum += inputArray[i];
    console.log(sum)


    console.log(inputArray[i-k])
    sum -= inputArray[i-k];
    console.log(sum)

    if(sum > max) max = sum;
    console.log(max)
  }

  return max;
}

// console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6, 4], 3));