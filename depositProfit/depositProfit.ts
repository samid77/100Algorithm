export function depositProfit(deposit: number, rate: number, threshold: number): number {

    let year:number = 0;
    let amount:number = deposit;

    while(threshold > amount) {
        amount += amount * (rate/100);
        year++
    }

    return year;
}

console.log(depositProfit(100, 20, 170))