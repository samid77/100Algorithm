export function ratingThreshold(threshold: number, ratings: number[][]): number[] {

    const review: number[] = [];

    for(let i=0; i < ratings.length; i++) {
        let total = 0;

        ratings[i].forEach((r: number) => {
            total += r;
        })

        if(total/ratings[i].length < threshold ) {
            review.push(i);
        }
    }


    return review;

}

console.log(ratingThreshold(3.5, 
    [[3, 4],
    [3, 3, 3, 4],
    [4]]));