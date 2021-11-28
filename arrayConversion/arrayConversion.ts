const arrayConversion = (inputArray) => {
  let isOdd = true;

  while(inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    
    isOdd = !isOdd;
  }
  
  return inputArray[0]

  
}

const sumProduct = (num, isOdd) => {
  const sumProducts = [];

  if(isOdd) {
    for(let i = 0; i < num; i+= 2) {
      sumProducts.push(num[i] + num[i+1]);
    }
  } else {
    for(let i = 0; i < num; i+= 2) {
      sumProducts.push(num[i] * num[i+1]);
    }
  }
  
  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
