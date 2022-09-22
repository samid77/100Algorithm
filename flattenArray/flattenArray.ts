export const flattenArray = (arr: any[]): any[] =>  {

    const tempArr: any[] = [];

    flatten(arr);

    function flatten(arr: any[]) {
        arr.forEach(e => {
            console.log(`e: ${e}`)
            if(Array.isArray(e)) {
                flatten(e);
            } else {
                tempArr.push(e)
            }
        });
    }

    return tempArr;
    
}

console.log(flattenArray([[["a"]], [["b"]]]));
// console.log(flattenArray([1, [2], [3, [[4]]]]));
