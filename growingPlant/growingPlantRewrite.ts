export function growingPlantRewrite(upSpeed: number, downSpeed: number, desiredHeight: number): number {

    let days: number = 0;
    let totalHeight: number = 0;

    while(totalHeight < desiredHeight) {
        days++;
        totalHeight += upSpeed;

        if(totalHeight < desiredHeight) totalHeight -= downSpeed

    }


    return days;

}

console.log(growingPlantRewrite(100, 10, 910))
console.log(growingPlantRewrite(100, 10, 810))