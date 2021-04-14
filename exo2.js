exo2 = (numbers) => {
  let count = 0;
  let result = [];

  for (let i = 0; i < numbers.length - 2; i++) {
    // coloquei menos 2 porque na verdade nao precisa fazer
    //a comparacao entre os dois ultimos posto que o ultimo sempre vera o por do sol

    // problema agora com o primeiro elemento

    count++;

    if (numbers[i] < numbers[i + 1]) {
      if (numbers[i + 1] > result[result.length - 1]) {
        result.pop();
      }
      result.push(numbers[i + 1]);
    }
  }
  result.push(numbers[numbers.length - 1]);

  if (result.length > 0) {
    console.log(`These are the buildings that watch the sunset ${result}`);
    console.log(`Bubble sort made ${count} comparisons`);
  } else {
    console.log(`somethin went wrong}`);
  }
};

exo2([50, 20, 8, 3, 10, 3, 4, 8, 3, 6]);
