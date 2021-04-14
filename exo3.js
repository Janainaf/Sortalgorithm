let exo3 = (numbers, target) => {
    let count = 0;

	let numObject = {};
	for (let i = 0; i < numbers.length; i++) {
		let thisNum = numbers[i];
		numObject[thisNum] = i;
	}
	
	// se entendi bem, aqui ele faz um loop de 1 dos numeros a ser somado
	// e abaixo ele faz o loop do outro numero

	for (var i = 0; i < numbers.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return [i, numObject[diff]];
		}

	console.log(`These are the index of the numbers that added gives you the wished result - ${result}`);
    console.log(`These are the numbers ${result}`);
    console.log(`Tri à bulle: ${count} comparaisons`);
	return result;
	}
	
   
}
console.log(exo3([2, 7, 11, 15], 9));

module.exports = exo1;


