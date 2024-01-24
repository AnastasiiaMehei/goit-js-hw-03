function filterArray(numbers, value) {
  let filteredArray = [];
  for (const number of numbers) {
    if (number > value) {
      filteredArray.push(number);
    }
  }
  return filteredArray;
}
