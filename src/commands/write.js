const { readFile, writeFile } = require("fs").promises;
const config = require("../config");
const todaysDate = require("../utils/todays-date");

const write = async (newNote) => {
  try {
    const notesFile = await readFile(config.notesPath, { encoding: "utf-8" });

    await writeToFile(newNote, notesFile);
    console.log("Note was saved");
  } catch (error) {
    if (error.code === "ENOENT") {
      const emptyNoteFile = "# Notes\n\n";

      await writeToFile(newNote, emptyNoteFile);

      console.log(
        `File not found, created ${config.fileName} in user directory`
      );
    }
  }
};

const writeToFile = async (newNote, oldNotes) => {
  const noteFileRows = oldNotes.split("\n");
  const heading = noteFileRows[0];

  const oldNoteRows = noteFileRows.slice(2, -1);

  const newNoteRow = `- ${todaysDate()}: ${newNote}`;
  const newNoteFileRows = [heading, "", newNoteRow, ...oldNoteRows, ""];

  const newNotes = newNoteFileRows.join("\n");

  await writeFile(config.notesPath, newNotes);
};

module.exports = write;
