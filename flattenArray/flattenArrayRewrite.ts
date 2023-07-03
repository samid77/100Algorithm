export const flattenArray = (arr: any[]): any[] =>  {
    return arr.flat(Infinity);   
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
