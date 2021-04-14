exo1 = (numbers, target) => {
  let result = [];
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      count++;
      if (numbers[i] + numbers[j] === target) {
        result.push(i);
        result.push(j);
        console.log(
          `These are the numbers ${numbers[i]} and ${numbers[j]} that added gives us target number ${target} `
        );
        console.log(`It was made ${count} comparisons`);
      }
    }
  }
  if (result.length > 0) {
    return result;
  } else {
    console.log(`There are no possible combination that adds to ${target}`);
  }
};

exo1([4, 5, 8, 1], 9);
