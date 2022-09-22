export function growingPlant(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    let days = 0;
    let totalHeight = 0;

    while(totalHeight < desiredHeight) {
        console.log(`totalHeight: ${totalHeight}`)
        console.log(`=====================`)
        days++;
        totalHeight += upSpeed

        if(totalHeight < desiredHeight) {
            totalHeight -= downSpeed
        }
    }

    return days;

}

console.log(growingPlant(100, 10, 910))