let data = require('./script.js');
 
	bubbleSort = () => {
	data = [];
	let count = 0;

	for (let i = data.length - 1; i >= 1; i--) {
		for (let j = 0; j < i; j++) {
			count++;
			if (data[j + 1] < data[j]) {
				let aux = data[j + 1];
				data[j + 1] = data[j];
				data[j] = aux;
			}
		}
	}
	console.log(`Tri à bulle: ${count} comparaisons`);
}

module.exports = bubbleSort;
