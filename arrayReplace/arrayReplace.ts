export function arrayReplace(inputArray: number[], elemToReplace: number, substitutionElem: number): number[] {
  
  inputArray.forEach((el, idx) => {
    if(el === elemToReplace) {
      inputArray[idx] = substitutionElem
    }
  })

  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));

//npx ts-node to run