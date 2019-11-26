const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

const readFile = async (filePath, encoding) => {
  const res = await readFileAsync(filePath, encoding);
  return res;
};

module.exports = readFile;
