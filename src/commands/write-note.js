const fs = require("fs");

const todaysDate = () => {
  const dateObj = new Date();
  const year = dateObj.getFullYear();
  const month = `${dateObj.getMonth() + 1}`.padStart(2, "0");
  const date = `${dateObj.getDate()}`.padStart(2, "0");
  return `${year}-${month}-${date}`;
};

const writeNote = (note) => {
  fs.readFile("notes.md", { encoding: "utf-8" }, (err, data) => {
    const noteFileRows = data.split("\n");
    const heading = noteFileRows[0];
    const oldNotes = noteFileRows.slice(2, -1);

    const newNote = `- ${todaysDate()}: ${note}`;
    const newNoteFileRows = [heading, "", newNote, ...oldNotes, ""];

    fs.writeFile("notes.md", newNoteFileRows.join("\n"), () => {
      console.log("Note was saved");
    });
  });
};

module.exports = writeNote;
