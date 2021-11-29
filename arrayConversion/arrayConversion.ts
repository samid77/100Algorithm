const arrayConversion = (inputArray) => {
  let firstSeq = [];
  let secondSeq = [];
  let thirdSeq = [];
  let fourthSeq = [];
  let i = 0;
  let j = 0;
  
  while(i < inputArray.length) {
    firstSeq.push(inputArray.slice(i, i + 2));
    i += 2
  }

  for(let i = 0; i < firstSeq.length; i++) {
    secondSeq.push(firstSeq[i].reduce((a, b) => a + b))
  }

  while(j < secondSeq.length) {
    thirdSeq.push(secondSeq.slice(j, j + 2));
    j += 2
  }

  for(let k = 0; k < thirdSeq.length; k++) {
    fourthSeq.push(thirdSeq[k].reduce((a, b) => a * b))
  }

  return fourthSeq.reduce((a, b) => a + b);


}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
