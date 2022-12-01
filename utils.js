const fs = require("fs");

module.exports = function generateList(
  listSize,
  sorted = false,
  saveToFile = false
) {
  let nums = new Set();
  while (nums.size !== listSize) {
    nums.add(Math.floor(Math.random() * 100000) + 1);
  }
  nums = Array.from(nums);
  if (sorted) {
    nums.sort(function (a, b) {
      return a - b;
    });
  }
  if (saveToFile) {
    const fs = require("fs");
    const writeStream = fs.createWriteStream("list.js");
    const pathName = writeStream.path;

    // write each value of the array on the file breaking line
    writeStream.write(`module.exports = savedList = [\n`);
    nums.forEach((value) => writeStream.write(`${value},\n`));
    writeStream.write(`\n]`);

    // the finish event is emitted when all data has been flushed from the stream
    writeStream.on("finish", () => {
      console.log(`wrote all the array data to file ${pathName}`);
    });

    // handle the errors on the write process
    writeStream.on("error", (err) => {
      console.error(`There is an error writing the file ${pathName} => ${err}`);
    });

    // close the stream
    writeStream.end();
  }
  return nums;
};
