export function confirmEnding(str: string, target: string): boolean {
   const gap:number = str.length - target.length;
   const gappedWord:string = str.substring(gap)

   console.log(gappedWord)
   return gappedWord === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));