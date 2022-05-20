export function validTime(time: string): boolean {
    const [hours, minutes] = time.split(':');
    
    if(parseInt(hours) < 0 || parseInt(hours) > 23) return false;
    if(parseInt(minutes) > 59 || parseInt(minutes) < 0) return false;

    return true;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));