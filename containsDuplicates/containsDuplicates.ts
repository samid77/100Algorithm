export function containsDuplicates(a: number[]): boolean {

    a = a.sort((a,b) => a-b)
    console.log(a);

    for(let i=0; i < a.length; i++) {
        if(a[i] === a[i + 1]) {
            return true;
        }
    }

    return false;
}

console.log(containsDuplicates([1, 2, 3, 1]));
console.log(containsDuplicates([3, 1]));
console.log(containsDuplicates([1,5,4,3,2,7]));
console.log(containsDuplicates([1,5,4,3,2,7,25,9,8,25]));
