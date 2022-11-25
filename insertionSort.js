module.exports = function insertionSort(array) {
  let comparisonCount = 0;
  let swapCount = 0;
  for (outer = 1; outer < array.length; outer++) {
    for (inner = 0; inner < outer; inner++) {
      comparisonCount += 1;
      if (array[outer] < array[inner]) {
        swapCount += 1;
        const [element] = array.splice(outer, 1);
        array.splice(inner, 0, element);
      }
    }
  }
  return {
    sorted: array,
    comparisonCount: comparisonCount,
    swapCount: swapCount,
  };
};
