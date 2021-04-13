const fs = require('fs');

const bubbleSort = require('./bubble');

const fileName = process.argv[2];

try {
    let data = fs.readFileSync(fileName, 'utf8');

    let numbers = data.split(' ').map(number => parseInt(number)) 

    bubbleSort(numbers);
    console.log(numbers);

} catch (error) {
    console.error(error.message);
}

module.exports = bubbleSort;

