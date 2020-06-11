const os = require("os");
const path = require("path");
const { fileName, editor } = require("./config.json");


module.exports = {
  fileName,
  editor,
  notesPath: path.resolve(os.homedir(), fileName),
};
