export function switchLights(a: number[]): number[] {
    let originalLights = [...a];
    for(let i=0; i < originalLights.length; i++) {
        console.log(`i: ${i}`)
        console.log(`a[i]: ${a[i]}`)
        if(a[i] === 1)  {
            originalLights = swapLights(originalLights, i);
        }

        console.log(`originalLights: ${originalLights}`)
        console.log(`=============`)
    }

    return originalLights
}

function swapLights(lights: number[], currentIdx: number): number[] {
    console.log(`lights: ${lights}`)
    for(let i=0; i < currentIdx + 1; i++) {
        console.log(`i in swapLights: ${i}`)
        console.log(`lights[i]: ${lights[i]}`)
        lights[i] = lights[i] === 1 ? 0 : 1;
    }
    console.log(`lights[currentIdx]: ${lights[currentIdx]}`)

    return lights;
}

console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));