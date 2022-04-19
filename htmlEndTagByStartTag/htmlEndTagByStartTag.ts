export function htmlEndTagByStartTag(startTag: string): string {

     const splitStr = startTag.split(' ');
     const splitTag = splitStr[0].toString().split('');
     let endTag = '</';

     for(let i = 1; i < splitTag.length; i++) {
         endTag += splitTag[i]
     }

     endTag = endTag[endTag.length - 1] === '>' ? endTag : endTag += '>';

     return endTag
}

console.log(htmlEndTagByStartTag("<button type='button' disabled>"));
console.log(htmlEndTagByStartTag('<i>'));