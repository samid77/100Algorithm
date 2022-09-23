export function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {

    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;


    return yourWeakest === friendWeakest && yourStrongest === friendStrongest || (yourLeft + yourRight) === (friendsLeft + friendsRight)
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
