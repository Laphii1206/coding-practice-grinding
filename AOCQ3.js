const fs = require('fs');
const DATA = './data/q3.txt';

fs.readFile(DATA, 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
let dataset = data.trim();
console.log(dataset);
});