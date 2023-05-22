export function commonCharacterCount(s1: string, s2: string): number {

  const splittedS1: string[] = s1.split('');
  const splittedS2: string[] = s2.split('');
  let counter = 0;
  let countedS1: { [key: string]: any } = {}
  let countedS2: { [key: string]: any } = {}

  countedS1 = getCharList(splittedS1);
  countedS2 = getCharList(splittedS2);

  for(const prop in countedS1) {
    if(countedS2.hasOwnProperty(prop)) {
      if(countedS2[prop] < countedS1[prop]) {
        counter += countedS2[prop]
      } else {
        counter += countedS1[prop]
      }
    }
  }

  /** Alternative solution */
  // splittedS1.forEach(s => {
  //   if(splittedS2.includes(s)) {
  //     counter++;
  //     splittedS2.splice(splittedS2.indexOf(s), 1);
  //   }
  // })

  return counter;

}

function getCharList (chars: string[]): object {
  const wordCount: { [key: string]: any } = {}

  for (let i = 0; i < chars.length; i++) {
    if(wordCount.hasOwnProperty(chars[i])) {
      // console.log(`if: ${chars[i]}`)
      wordCount[chars[i]]++;
    } else {
      // console.log(`else: ${chars[i]}`)
      wordCount[chars[i]] = 1;      
    }
  }

  // console.log(wordCount)
  return wordCount;
}

console.log(commonCharacterCount('aabcc', 'adcaa'));
// console.log(commonCharacterCount('abbcc', 'adbbcaa'));