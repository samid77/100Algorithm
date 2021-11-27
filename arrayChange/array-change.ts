const arrayChange = (arr) => {
  
  let count = 0;

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= arr[i + 1]) {
      const diff = (arr[i] + 1) - arr[i + 1]
      arr[i + 1] = arr[i] + 1

      count += diff;
    }
  }

  return count;
}

// console.log(arrayChange([1,1,1]))
console.log(arrayChange([1,2,3]))