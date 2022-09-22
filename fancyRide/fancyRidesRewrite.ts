export function fancyRide(l: number, fares: number[]): string {

    const rides:string[] = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    for(let i=rides.length; i >= 0; i--) {
        if(fares[i] * l <= 20) {
            return rides[i]
        }
    }
    return '';
}

console.log(fancyRide(30, [0.3, 0.5, 0.7, 1, 1.3]));