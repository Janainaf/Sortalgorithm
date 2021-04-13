let numbers = require('./script.js');
 
	bubbleSort = () => {
	numbers = [];
	let count = 0;

	for (let i = numbers.length - 1; i >= 1; i--) {
		for (let j = 0; j < i; j++) {
			count++;
			if (numbers[j + 1] < numbers[j]) {
				let aux = data[j + 1];
				numbers[j + 1] = numbers[j];
				numbers[j] = aux;
			}
		}
	}
	console.log(`Tri à bulle: ${count} comparaisons`);
}

module.exports = bubbleSort;
