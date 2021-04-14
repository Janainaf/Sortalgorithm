const fs = require('fs');

// const bubbleSort = require('./bubble');
const exo1 = require('./exo1');


const fileName = process.argv[2];

try {
    let data = fs.readFileSync(fileName, 'utf8');

    let numbers = data.split(' ').map(number => parseInt(number)) 

    // bubbleSort(numbers);
    // console.log(numbers);
   // exo1(result);
    exo1(result);


} catch (error) {
    console.error(error.message);
}

// module.exports = bubbleSort;
module.exports = exo1;


