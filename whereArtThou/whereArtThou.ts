export function whereArtThou(collection: object[], source: object):any[] {

    let arr:any[] = collection.filter((item) => {
      for(let i in source) {
        console.log(i)
        console.log(source[i])
        console.log(item[i])
        if(source[i] !== item[i]) {
            return false;
        }
      }
      return true;
    })

    return arr;
}

console.log(whereArtThou([
    {first: "Romeo", last:"Montage"},
    {first: "Mercution", last:null},
    {first: "Tybalt", last:"Capulet"}
], {last: "Capulet"}))