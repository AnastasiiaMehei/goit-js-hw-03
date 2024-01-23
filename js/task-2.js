function makeArray(firstArray, secondArray, maxLength) {
  const array = firstArray.concat(secondArray);
  if (array.length > maxLength) {
    return array.slice(0, maxLength);
  } else {
    return array;
  }
}
