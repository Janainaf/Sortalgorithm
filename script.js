const fs = require('fs');

const bubbleSort = require('./bubble');

const fileName = process.argv[2];

try {
    const data = fs.readFileSync(fileName, 'utf8');
    const numbers = data.split(' ')
    bubbleSort([numbers]);
    console.log(data);
} catch (error) {
    console.error(error.message);
}

module.exports = bubbleSort;
