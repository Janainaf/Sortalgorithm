exo2 = (numbers) => {
	
	let count = 0;

	for (
		let i = 0; i < numbers.length; i++) {
			for (let j = 0; j < numbers.length; j++) {
				count++;
			if (numbers[j + 1] < numbers[j]) {
					let aux = numbers[j];
					numbers[j] = numbers[j+1];
					numbers[j+1] = aux;
			}
		}
	}
	console.log(`Tri à bulle: ${count} comparaisons`);
}

module.exports = exo2;
