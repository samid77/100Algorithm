export function fareEstimatorRewrite(ride_time: number, ride_distance: number, cost_per_minute: number[], cost_per_mile: number[]): number[] {

    let fareCost: number[] = [];

    for(let i=0; i < cost_per_mile.length; i++) {
        fareCost.push(Math.floor(ride_time * cost_per_minute[i] + cost_per_mile[i] * ride_distance))
    }

    return fareCost;
    
}

console.log(fareEstimatorRewrite(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]));