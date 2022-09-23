export function alphabeticShift(inputString: string): string {
    
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let arrInput: string[] = inputString.split('');
    for(let i=0; i < inputString.length; i++) {
        let idx = 0;

        if(inputString[i] !== 'z') idx = alphabet.indexOf(arrInput[i]) + 1
        

        arrInput[i] = alphabet[idx];
    }

    return arrInput.join('');


}

console.log(alphabeticShift('crazy'));

