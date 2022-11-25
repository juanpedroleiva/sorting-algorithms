const { performance } = require("perf_hooks");
const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const selectionSort = require("./selectionSort");
const generateList = require("./utils");

function main(sortingMethod, size, bestCase = false, print = true) {
  if (!["bubble", "insertion", "selection", "quick"].includes(sortingMethod)) {
    throw new Error("Esse método de ordenação não foi implementado");
  }
  if (size > 100000 || size <= 0) {
    throw new Error("Enter a valid list size (from 1 to 100k)");
  }
  let list = generateList(size, bestCase);
  console.log(`Método de Ordenação Selecionado: ${sortingMethod}`);
  console.log("Lista inicial:");
  console.log(list);
  let startTime = performance.now();
  let result;
  switch (sortingMethod) {
    case "bubble":
      result = bubbleSort(list);
      break;
    case "insertion":
      result = insertionSort(list);
      break;
    case "selection":
      result = selectionSort(list);
      break;
  }
  if (print) {
    console.log(result.sorted);
  }
  console.log(`Tempo de execução: ${performance.now() - startTime}`);
  console.log(`Número de comparações: ${result.comparisonCount}`);
  console.log(`Número de trocas: ${result.swapCount}`);
  return;
}

main("selection", 900, true);
