var matchPlayersAndTrainers = (players, trainers) => {
    let count = 0
    players = players.sort((a, b) => a - b)
    trainers = trainers.sort((a, b) => a - b)

   while (i < players.length && j < trainers.length) {
        if (players[i] <= trainers[j]) {
            count++;
            i++;
        }
        j++; 
    }

    return count
};

let p = [4, 7, 9]
let t = [8, 2, 5, 8]

console.log(matchPlayersAndTrainers(p, t))