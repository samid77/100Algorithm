export function houseOfCats(legs: number): number[] {
    let people: number[] = [];

    if(legs === 2) {
        return [1];
    }

    while(legs >= 0) {
        people.unshift(legs/2)
        legs -= 4
    }

    return people
}

console.log(houseOfCats(6));
console.log(houseOfCats(2));
