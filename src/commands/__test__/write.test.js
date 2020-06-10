const mock = require("mock-fs");
const config = require("../../config");
const writeNote = require("../write");
const { readFile } = require("fs").promises;
const todaysDate = require("../../utils/todays-date");

const emptyNoteFile = "# Notes\n\n";
const newNote = "This is a new note";
const expectedNoteFile = `# Notes

- ${todaysDate()}: ${newNote}
`;

it("adds notes to the notefile", async () => {
  mock({
    [config.notesPath]: emptyNoteFile,
  });
  await writeNote(newNote);
  const newData = await readFile(config.notesPath, { encoding: "utf-8" });
  expect(newData).toBe(expectedNoteFile);
  mock.restore();
});

it("creates a new file if none exists", async () => {
  mock({});
  await writeNote(newNote);
  const newData = await readFile(config.notesPath, { encoding: "utf-8" });
  expect(newData).toBe(expectedNoteFile);
  mock.restore();
});
