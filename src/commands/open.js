const { spawn } = require("child_process");
const config = require("../config");
const { stdin } = require("process");

const open = () => {
  console.log(`Opening notes file with ${config.editor}`);
  spawn(config.editor, [config.notesPath], { stdio: "inherit" });
};

module.exports = open;
