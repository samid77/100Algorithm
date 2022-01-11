export function isCaseInsensitivePalindrome(inputString: string): boolean {

  const originalLowerCase = inputString.toLowerCase();
  const reversedWord = inputString.toLowerCase().split('').reverse().join('');

  return originalLowerCase === reversedWord;

}

console.log(isCaseInsensitivePalindrome('AaBaa'));
console.log(isCaseInsensitivePalindrome('abac'));