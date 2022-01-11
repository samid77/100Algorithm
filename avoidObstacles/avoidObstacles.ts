export function avoidObstacles(inputArray: number[]) {

  inputArray = inputArray.sort((a,b) => a - b);
  const largestVal = inputArray[inputArray.length - 1];

  for (let i = 1; i < largestVal + 1; i++) {
    if(inputArray.every((el) => el % i !== 0)) {
      return i;
    }
    console.log(inputArray.every((el) => el % i !== 0))
  }


}

console.log(avoidObstacles([5, 3, 6, 7, 9]));