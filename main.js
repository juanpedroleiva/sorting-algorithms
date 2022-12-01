const { performance } = require("perf_hooks");
const bubbleSort = require("./bubbleSort");
const insertionSort = require("./insertionSort");
const selectionSort = require("./selectionSort");
const improvedBubbleSort = require("./improvedBubbleSort");
const generateList = require("./utils");
const savedList = require("./list");

function main(
  sortingMethod,
  size,
  saveList = false,
  setList = false,
  bestCase = false
) {
  if (
    !["bubble", "insertion", "selection", "improvedBubble"].includes(
      sortingMethod
    )
  ) {
    throw new Error("Esse método de ordenação não foi implementado");
  }
  if (size > 100000 || size <= 0) {
    throw new Error("Enter a valid list size (from 1 to 100k)");
  }
  if (setList) {
    var list = savedList;
  } else {
    var list = generateList(size, bestCase, saveList);
  }
  console.log(
    `********** Método de Ordenação Selecionado: ${sortingMethod} **********`
  );
  console.log("Lista inicial:");
  console.log(list);
  let startTime = performance.now();
  let result;
  switch (sortingMethod) {
    case "bubble":
      result = bubbleSort(list);
      break;
    case "improvedBubble":
      result = improvedBubbleSort(list);
      break;
    case "insertion":
      result = insertionSort(list);
      break;
    case "selection":
      result = selectionSort(list);
      break;
  }
  console.log("Sorted list:");
  console.log(result.sorted);
  console.log(`Tempo de execução: ${performance.now() - startTime}`);
  console.log(`Número de comparações: ${result.comparisonCount}`);
  console.log(`Número de trocas: ${result.swapCount}`);
  return;
}
const tamanho = 100000;
console.log("********** Execução Iniciada **********");
console.log(`********** Tamanho: ${tamanho} **********`);
main("selection", tamanho, false, true);
