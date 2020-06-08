const { exec } = require("child_process");
const config = require("../config");

const openNotes = () => {
  return exec(
    `${config.editor.command} ${config.notesPath}`,
    (error, stdout, stderr) => {
      if (error) {
        return console.log(`error: ${error.message}`);
      }
      if (stderr) {
        return console.log(`stderr: ${stderr}`);
      }

      console.log(`Opening notes in ${config.editor.name}...`);
    }
  );
};

module.exports = openNotes;
