export function circleOfNumbers(n: number, firstNumber: number): number {

  const numberList:number[] = [];
  const halfWay: number = n/2;

  for(let i=0; i < n; i++) {
    numberList.push(i);
  }

  if(firstNumber < halfWay) {
    return numberList[firstNumber + halfWay]
  } 
  return numberList[firstNumber - halfWay]

}

console.log(circleOfNumbers(10, 4));
console.log(circleOfNumbers(10, 5));
console.log(circleOfNumbers(10, 8));
console.log(circleOfNumbers(10, 6));