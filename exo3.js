exo3 = (numbers, target) => {
    let count = 0;
    numberIndex = {};   // ok, um hash com o index dos numeros e  voila  key + value
		for (let i = 0; i < numbers.length; i += 1) { // pra cade numero no array
			let numberId = numbers[i] // pegando o numero de cada index
			numberIndex[numberId] = i; // 

		}
		for (let i = 0; i < numbers.length; i ++) {
			count++;

			let difference = target - numbers[i]; 

			if (numberIndex[difference]!== undefined  && numberIndex[difference] !== i) {

			console.log(`These are the numbers ${numbers[i]} and ${numbers[numberIndex[difference]]} for the target ${target} `);  
			console.log(`New alg ${count} comparisons`);

			return [i, numberIndex[difference]];
		} 
		if (numberIndex[difference] === undefined);
    console.log(`There are no possible combination that adds to ${target}  `);
	}
}
            
	console.log(exo3([2, 5, 6, 7], 9));