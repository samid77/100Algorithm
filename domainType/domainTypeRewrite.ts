export function domainType(domains: string[]): string[] {
    const domainType:string[] = [];
    for(let i=0; i < domains.length; i++) {
        const address:string[] = domains[i].split('.')
        const eachDomain:string = address[address.length - 1];

        if(eachDomain === 'org') {
            domainType.push('organization')
        } else if(eachDomain === 'com') {
            domainType.push('commercial')
        } else if(eachDomain === 'net') {
            domainType.push('network')
        } else {
            domainType.push('information')
        }
    }

    return domainType;

}

console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));