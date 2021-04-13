const data = require('./script.js');
 
	bubbleSort = () => {
	const array = data; 
	let count = 0;

	for (let i = array.length - 1; i >= 1; i--) {
		for (let j = 0; j < i; j++) {
			count++;
			if (array[j + 1] < array[j]) {
				let stock = array[j + 1];
				array[j + 1] = array[j];
				array[j] = stock;
			}
		}
	}
	console.log(`Tri à bulle: ${count} comparaisons`);
}

module.exports = bubbleSort;
