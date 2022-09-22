const add = (...params: number[]): number => {
    return params.reduce((a,b) => a + b);
}


console.log(add(1,2,3,4,5));
console.log(add(2,3));