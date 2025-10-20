const fs = require('fs');
const DATA = './data/q1.txt';

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

    matrix.sort((a, b) => a[0] - b[0]);
    matrix.sort((a, b) => a[1] - b[1]);

    const leftList = matrix.map(row => row[0]);
    const rightList = matrix.map(row => row[1]);

    leftList.sort((a, b) => a - b);
    rightList.sort((a, b) => a - b);

    console.log(leftList);
    console.log(rightList);
    const differences = leftList.map((leftNum, index) => {
    const rightNum = rightList[index];
    
    return Math.abs(leftNum - rightNum);
});

    let total = 0;
    for (const i in differences) {
        total += differences[i];
    }
    console.log(total);

});

