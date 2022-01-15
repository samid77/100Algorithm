export function checkPalindrome(inputString: string): boolean {
  return inputString.toLowerCase().split('').reverse().join('') === inputString.toLowerCase()
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
