const { exec } = require("child_process");

const openNotes = () => {
  exec("code notes.md", (error, stdout, stderr) => {
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
