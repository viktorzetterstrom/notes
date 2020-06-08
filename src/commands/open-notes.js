const { exec } = require("child_process");
const config = require("../config");

const openNotes = () => {
  exec(`code ${config.NOTES_PATH}`, (error, stdout, stderr) => {
    if (error) {
      return console.log(`error: ${error.message}`);
    }
    if (stderr) {
      return console.log(`stderr: ${stderr}`);
    }

    console.log("Opening notes in VS Code...");
  });
};

module.exports = openNotes;
