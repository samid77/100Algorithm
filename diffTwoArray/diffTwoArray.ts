export function diffTwoArray(arr1:any[], arr2: any[]): any[] {
    let tempArr:any[] = [];
    for(let i=0; i < arr1.length; i++) {
        if(arr2.indexOf(arr1[i]) === -1) {
            tempArr.push(arr1[i]);
        }
    }

    for(let j=0; j < arr2.length; j++) {
        if(arr1.indexOf(arr2[j]) === -1) {
            tempArr.push(arr2[j]);
        }
    }
    return tempArr;
}

console.log(diffTwoArray([1,2,3,5], [1,2,3,4,5]));
console.log(diffTwoArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt","dead shrub"]));
console.log(diffTwoArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"],
["diorite", "andesite", "grass", "dirt","dead shrub"]));