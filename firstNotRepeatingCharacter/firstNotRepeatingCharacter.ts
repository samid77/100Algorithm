export function firstNotRepeatingCharacter(s: string): string {

        const charArr: string[] = s.split('');
        let duplicates:any = {};
        let result = '_';
        let idxAnswer = Number.MAX_SAFE_INTEGER;

        charArr.forEach((e, idx) => {
            if(!duplicates.hasOwnProperty(e)) {
                duplicates[e] = {
                    count: 1,
                    idx
                }
            } else {
                duplicates[e].count++;
                duplicates[e].idx = idx
            }
        })

        for(const key in duplicates) {
            if(duplicates[key].count === 1 && duplicates[key].idx < idxAnswer) {
                result = key;
                idxAnswer = duplicates[key].idx;
            }
        }


        return result;
}

console.log(firstNotRepeatingCharacter('abacabad'));
console.log(firstNotRepeatingCharacter('abacabaabacaba'));
