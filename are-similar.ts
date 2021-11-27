const areSimilar = (a, b) => {
    const c = [];
    let d = [];

    if(a.toString() === b.toString()) {
      return true;
    }

    for(let i = 0; i < a.length; i++) {
      if(a[i] !== b[i]) {
        // console.log(`a: ${a[i]}`)
        // console.log(`b: ${b[i]}`)
        c.push(a[i])
        d.push(b[i])
      }
    }

    console.log(c)
    console.log(d.reverse())

    d = d.reverse()



    if(c.length === 2 && (c.toString() === d.toString())) {
      return true;
    }
    return false
}

// console.log(areSimilar([1,2,3], [1,2,3]))
// console.log(areSimilar([1,2,3], [3,2,1]))
console.log(areSimilar([1,2,2], [2,3,1]))