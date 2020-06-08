const os = require("os");
const path = require("path");

const FILE_NAME = ".vz-notes.md";
module.exports = {
  FILE_NAME,
  NOTES_PATH: path.resolve(os.homedir(), FILE_NAME),
};
