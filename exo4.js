exo4 = (numbers) => {
  let count = 1;
  numbers = numbers.reverse();

  let currentmax = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > currentmax || numbers[i] == currentmax) {
      count++;
      currentmax = numbers[i];
    }
  }
  console.log(count);
  return count;
};

exo4([5, 20, 10, 3, 10, 6, 50]);
