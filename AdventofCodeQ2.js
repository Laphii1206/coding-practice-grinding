const fs = require('fs');
const DATA = './data/q2.txt';

fs.readFile(DATA, 'utf-8', (err, num) => {
    if (err) {
        console.error(err);
        return;
    }
    const rows = num.trim().split('\n');

    const matrix = rows.map(row => {
        const columns = row.trim().split(/\s+/);

        return columns.map(Number);
    });

    let safeCount = 0;

    for (const i in matrix) {
        isDanger = false;
        let requiredChecks = 0;
        if (matrix[i].length < 2) continue;

        for (let j = 1; j < matrix[i].length; j++) {
            const current = matrix[i][j];
            const previous = matrix[i][j - 1];
            let directions = 0;
            let difference = 0;

            difference = current - previous;


            if (Math.abs(difference) > 3) {
                isDanger = true;
                break;
            } else if (difference === 0) {
                isDanger = true;
                break;
            }

            if (requiredChecks === 0) {
                requiredChecks = (difference > 0) ? 1 : -1;
            }
            else {
                directions = (difference > 0) ? 1 : -1;
                if (directions !== requiredChecks) {
                    isDanger = true;
                    break;
                }
            }

        }
        if (!isDanger) {
            safeCount++;
        }
    }
    console.log(`Safe Count: ${safeCount}`);

});

