var numberOfBeams = (bank) => {
    bank = bank.map(row => row.split('').map(Number));
    let j = 0
    let count = 0
    let previousCount =0
    let laserCount =0

    for (let i = 0; i < bank.length; i++) {
        let count =0
        for (let j = 0; j < bank[i].length; j++) {
                if (bank[i][j] === 1){
                    count++
                }
            
        }
        if(count > 0){
            laserCount = laserCount + (previousCount * count)
            previousCount = count
        }
    }


return laserCount;

};

let bank = ["011001", "000000", "010100", "001000"];

console.log(numberOfBeams(bank))