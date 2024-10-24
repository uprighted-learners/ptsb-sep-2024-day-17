// an array of candidates
const candidates = ["Mr. Duck", "Hurambi", "Ralph Nader"];

// an array of votes
let votes = [];

// function that casts the vote
function castVote() {
    let candidate = prompt(`Who are you voting for? ${candidates.join(", ")}`);

    const isValidCandidate = candidates.some(cand =>
        new RegExp(`^${cand}$`, 'i').test(candidate.trim())
    )

    if (isValidCandidate) {
        console.log(`You voted for ${candidate}`);
        votes.push(candidate);
    } else {
        console.log(`${candidate} is not a valid candidate.`);
        castVote();
    }
}

// function that counts votes
function countVotes() {
    candidates.forEach((candidate) => {
        let voteCount = votes.filter(vote => vote === candidate).length;
        console.log(`${candidate} has ${voteCount} votes.`);
    })
}

// function that finds the winner
function findWinner() {
    if (votes.length === 0) {
        console.log("No votes have been cast yet.");
        return;
    }

    let voteCounts = candidates.map(candidate => ({
        name: candidate,
        count: votes.filter(vote => vote === candidate).length
    }));

    let winner = voteCounts.reduce((max, candidate) => candidate.count > max.count ? candidate : max);
    console.log(`The winner is ${winner.name} with ${winner.count} vote(s)!`);
}
// function that displays the results
function displayMenu() {
    let action;
    do {
        action = prompt(
            `What would you like to do?
            1. Cast a vote
            2. Count votes
            3. Find the winner
            4. Exit
            `
        );

        switch (action) {
            case "1":
                castVote();
                break;
            case "2":
                countVotes();
                break;
            case "3":
                findWinner();
                break;
            case "4":
                console.log("Goodbye!");
                break;
            default:
                console.log("Invalid option. Please try again.");
                displayMenu();
        }
    } while (action !== "4");
}

displayMenu();