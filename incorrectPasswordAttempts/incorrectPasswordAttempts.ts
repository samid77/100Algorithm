export function incorrectPasscodeAttempts(passcode: string, attempts: string[]): boolean {

    let failedAttempt = 0;

    for(let attempt of attempts) {
        failedAttempt = attempt === passcode ? 0 : failedAttempt++;
        if(failedAttempt === 10) {
            return true;
        }
    }

    return false;

}

console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "1111"]));
console.log(incorrectPasscodeAttempts('1111', ["1111", "4444", "9999", "3333", "8888", "2222", "7777", "0000", "6666", "7285", "5555", "6666", "1111"]));