exo3 = (numbers, target) => {
  numberHashmap = {};
  for (let i = 0; i < numbers.length; i += 1) {
    let valueNumber = numbers[i];
    numberHashmap[valueNumber] = i;
  }

  console.log(numberHashmap);

  let count = 0;
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    count++;

    let difference = target - numbers[i];

    if (
      numberHashmap[difference] !== undefined &&
      numberHashmap[difference] !== i
    ) {
      result.push(numbers[i]);
      console.log(
        `These are the numbers ${numbers[i]} and ${
          numbers[numberHashmap[difference]]
        } for the target ${target} `
      );
      console.log(`New alg ${count} comparisons`);
    }
  }
  if (result.length > 0) {
    return result;
  } else {
    console.log(`There are no possible combination that adds to ${target}`);
  }
};

exo3([2, 3, 5, 4], 9);
