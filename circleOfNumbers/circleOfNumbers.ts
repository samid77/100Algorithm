export function circleOfNumbers(n: number, firstNumber: number): number {

  const listNumber = [];
  const halfWay = n/2;

  for(let i = 0; i < n; i++) {
    listNumber.push(i)
  }

  if(firstNumber < halfWay) {
    return listNumber[firstNumber + halfWay]
  } else {
    return listNumber[firstNumber - halfWay]
  }

}

console.log(circleOfNumbers(10, 8));