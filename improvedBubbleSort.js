module.exports = function improvedBubbleSort(array) {
  var x, y, holder;
  let comparisonCount = 0;
  let swapCount = 0;
  // The Bubble Sort method.
  for (x = 0; x < array.length; x++) {
    var swapOccured = false;
    for (y = 0; y < array.length - 1; y++) {
      comparisonCount += 1;
      if (array[y] > array[y + 1]) {
        holder = array[y + 1];
        array[y + 1] = array[y];
        array[y] = holder;
        swapOccured = true;
        swapCount += 1;
      }
    }
    if (!swapOccured) break;
  }
  return {
    sorted: array,
    comparisonCount: comparisonCount,
    swapCount: swapCount,
  };
};
