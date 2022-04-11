export function electionsWinners(votes: number[], k: number): number {

    let currCandidates: number = 0;
    let sortedVotes: number[] = votes.sort((a,b) => b - a)
    let maxVote: number = Math.max(...votes)

    if(sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    }

    votes.forEach((vote) => {
        if(maxVote - vote < k) {
            currCandidates++;
        }
    })


    return currCandidates;


}

console.log(electionsWinners([2, 3, 5, 2], 3));