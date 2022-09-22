export function firstDuplicate(numbers: number[]): number {

   const firstDup: any = {};
   for(let num of numbers) {
        if(firstDup.hasOwnProperty(num)) {
            return num;
        } else {
            firstDup[num] = num
        }
   }
   

   return -1;
}

console.log(firstDuplicate([2, 1, 3, 5, 3, 2]));
console.log(firstDuplicate([2, 4, 3, 5, 1]));