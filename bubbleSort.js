module.exports = function bubbleSort(array) {
  let swapped = false;
  let comparisonCount = 0;
  let swapCount = 0;
  do {
    swapped = false;
    array.forEach((current, i) => {
      comparisonCount += 1;
      if (current > array[i + 1]) {
        const temp = current;
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapCount += 1;
        swapped = true;
      }
    });
  } while (swapped);
  return {
    sorted: array,
    comparisonCount: comparisonCount,
    swapCount: swapCount,
  };
};
