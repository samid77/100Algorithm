const arrayMaxConsecutiveSum = (inputArray, k) => {
  let i = 0;
  let highest = 0;

  while(i < inputArray.length) {
    if(!isNaN(inputArray[i] + inputArray[i + 1])) {
      if(inputArray[i] + inputArray[i + 1] > highest) {
        highest = inputArray[i] + inputArray[i + 1]
      }
    }
    i++;
  }

  return highest


}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));