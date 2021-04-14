exo2 = (numbers) => {
    let count = 0;
	let result = [];

	for (let i = 0; i < numbers.length; i++) {   // para cada predio/numero do array numbers
		for (let j = i + 1; j < numbers.length; j++) { // comparando com o predio ao seu lado
            count++;
			
			
			while (numbers[i] < numbers[j]) { // se o primeiro predio for menor que o segundo predio
				result.push(j); // adicionar o predio maior

				console.log(`These are the buildings that watch the sunset ${result}`);  
				console.log(`Bubble sort made ${count} comparisons`);
				
				return result // quero saber pq tem que ter um result aqui
			   } 
			   
		   }
	   }
	   if (result === undefined);
	   console.log(`Something went wrong `);
   
	   // Questao 2 - como passar o parametro target utilizando o node, o script.js e a list.txt?
   }

   console.log(exo2([1, 5, 8, 5]));
