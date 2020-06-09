const fs = require("fs");

const config = require("../config");
const todaysDate = require("../utils/todays-date");

const writeNote = (note) => {
  fs.readFile(config.notesPath, { encoding: "utf-8" }, (error, data) => {
    if (error && error.code === "ENOENT") {
      console.log(
        `File not found, creating ${config.fileName} in user directory...`
      );
      data = "# Notes\n\n";
    } else if (error) {
      return console.log(error);
    }

    const noteFileRows = data.split("\n");
    const heading = noteFileRows[0];
    const oldNotes = noteFileRows.slice(2, -1);

    const newNote = `- ${todaysDate()}: ${note}`;
    const newNoteFileRows = [heading, "", newNote, ...oldNotes, ""];

    fs.writeFile(config.notesPath, newNoteFileRows.join("\n"), () => {
      console.log("Note was saved");
    });
  });
};

module.exports = writeNote;
