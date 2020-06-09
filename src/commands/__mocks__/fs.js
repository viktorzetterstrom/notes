const fs = jest.genMockFromModule("fs");

const notesFile = undefined;

const readFile = jest.fn().mockImplementation((path, options, callback) => {
  return;
});

const writeFile = jest.fn().mockImplementation((path, callback) => {
  return;
});

fs.readFile = readFile;
fs.writeFile = writeFile;

module.exports = fs;
