const os = require("os");
const path = require("path");
const { editor } = require("./config.json") || "code";

const fileName = ".vz-notes.md";

module.exports = {
  fileName,
  editor,
  notesPath: path.resolve(os.homedir(), fileName),
};
