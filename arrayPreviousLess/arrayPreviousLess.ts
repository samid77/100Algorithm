const arrayPreviousLess = (items: number[]): number[] => {

  const finalArr: number[] = [];

  for(let i=items.length - 1; i >=0; i--) {
    for(let j=i; j>=0; j--) {
      console.log(`j: ${j}`)
      console.log(`items[j]: ${items[j]}`)
      if(items[i] > items[j]) {
        finalArr.unshift(items[j])
        break;
      } else if(j === 0) {
        finalArr.unshift(-1);
      }
    }
    console.log(`==========`)
  }

  return finalArr;

}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));