exo1 = (numbers, target) => {
	let result = [];
    let count = 0;

	for (let i = 0; i < numbers.length; i++) {
		for (let j = i + 1; j < numbers.length; j++) {
            count++;
			if (numbers[i] + numbers[j] === target) {
				result.push(i);
				result.push(j);
             console.log(`These are the numbers ${numbers[i]} and ${numbers[j]} that added gives us target number ${target} `);  
             console.log(`Bubble sort made ${count} comparisons`);
             return result // quero saber pq tem que ter um result aqui
            } 
		}
	}
    if (result === undefined);
    console.log(`There are no possible combination that adds to ${target}  `);

    // Questao 2 - como passar o parametro target utilizando o node, o script.js e a list.txt?
}
console.log(exo1([1, 5], 9));

module.exports = exo1;
