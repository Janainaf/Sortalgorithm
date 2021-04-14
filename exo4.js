exo4 = (numbers) => {
  let count = 0;
  let result = [];
  let currentmax = 0;

  for (let i = 0; i < numbers.length - 1; i++) {
    count++;

    if (numbers[i] > numbers[i + 1] && numbers[i] >= currentmax) {
      result.push(numbers[i]);
      currentmax = numbers[i];
    }
  }
  result.push(numbers[numbers.length - 1]);
  if (result.length > 0) {
    console.log(`These are the buildings that watch the sunset ${result}`);
    console.log(`Algo made ${count} comparisons`);
  } else {
    console.log(`Something went wrong`);
  }
};

exo4([50, 20, 70, 3, 10, 6, 5, 50]);
