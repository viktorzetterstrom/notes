const open = require("../open");
const child_process = require("child_process");
const config = require("../../config");

jest.mock("child_process");

it("opens the notes in editor", async () => {
  const editorRegex = new RegExp(`^${config.editor.command}`);
  const command = open();
  expect(child_process.exec).toHaveBeenCalled();
  expect(command.match(editorRegex)).toBeTruthy();
});
