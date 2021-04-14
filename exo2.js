exo2 = (numbers) => {
  let count = 0;
  let result = [];

  for (let i = 0; i < numbers.length - 1; i++) {
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
    console.log(`This algo made ${count} comparisons`);
  } else {
    console.log(`Something went wrong}`);
  }
};

exo2([50, 20, 8, 3, 10, 6, 5]);
