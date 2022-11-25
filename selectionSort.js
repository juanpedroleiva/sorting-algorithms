var comparisonCount = 0;
var swapCount = 0;

const swapNumbers = (array, i, j) => {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
  swapCount++;
};

module.exports = selectionSort = (array) => {
  let minIndex = null;
  for (let i = 0; i < array.length; i++) {
    minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      comparisonCount++;
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    swapNumbers(array, i, minIndex);
  }
  return {
    sorted: array,
    comparisonCount: comparisonCount,
    swapCount: swapCount,
  };
};
