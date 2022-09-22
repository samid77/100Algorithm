export function electionsWinners(votes: number[], k: number): number {

    let currCandidates: number = 0;
    console.log(votes)
    let sortedVotes: number[] = votes.sort((a,b) => b - a)
    console.log(sortedVotes)
    let maxVote: number = Math.max(...votes)
    console.log(maxVote);
    console.log(votes);

    if(sortedVotes[0] !== sortedVotes[1] && k === 0) {
        return 1;
    }

    votes.forEach((vote) => {
        console.log(vote)
        console.log(maxVote - vote < k);
        if(maxVote - vote < k) {
            currCandidates++;
        }
    })


    return currCandidates;


}

console.log(electionsWinners([2, 3, 5, 2], 3));