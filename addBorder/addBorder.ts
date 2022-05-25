export function addBorder(picture: string[]): any {
    const wallLength: number = picture[0].length + 2;
    let wall = '';

    for(let i=0; i < wallLength; i++) {
        wall = wall.concat('*')
    }

    picture.push(wall);
    picture.unshift(wall);

    for(let i=1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i] + '*');
    }

    return picture;
}
export function addBorderAlternative(picture: string[]): any {
    const wall: string = '*'.repeat(picture[0].length + 2)

    picture.unshift(wall);
    picture.push(wall);

    for(let i=1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i] + '*');
    }
    
    return picture;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorderAlternative(["abc", "ded"]));