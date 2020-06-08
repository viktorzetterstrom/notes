const os = require("os");
const path = require("path");

const fileName = ".vz-notes.md";
const editor = {
  command: "code",
  name: "Visual Studio Code",
};
module.exports = {
  fileName,
  editor,
  notesPath: path.resolve(os.homedir(), fileName),
};
