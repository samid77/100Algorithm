const arrayPreviousLessRewrite = (items: number[]): number[] => {

  let arrResult: number[] = [];
  for(let i=items.length - 1; i >=0; i--) {
    for(let j=i; j >= 0; j--) {
      if(items[i] > items[j]) {
        arrResult.unshift(items[j]);
        break;
      } else if(j === 0) {
        arrResult.unshift(-1);
      }
    }
  }

  return arrResult;

}

console.log(arrayPreviousLessRewrite([3, 5, 2, 4, 5]));