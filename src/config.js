const os = require("os");
const path = require("path");

const fileName = ".vz-notes.md";
const editor = "code";
module.exports = {
  fileName,
  editor,
  notesPath: path.resolve(os.homedir(), fileName),
};
