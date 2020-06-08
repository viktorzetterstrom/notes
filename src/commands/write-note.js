const fs = require("fs");

const config = require("../config");

const todaysDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = `${dateObj.getMonth() + 1}`.padStart(2, "0");
  const date = `${dateObj.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const writeNote = (note) => {
  fs.readFile(config.NOTES_PATH, { encoding: "utf-8" }, (error, data) => {
    if (error && error.code === "ENOENT") {
      console.log(
        `File not found, creating ${config.FILE_NAME} in user directory...`
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

    fs.writeFile(config.NOTES_PATH, newNoteFileRows.join("\n"), () => {
      console.log("Note was saved");
    });
  });
};

module.exports = writeNote;
