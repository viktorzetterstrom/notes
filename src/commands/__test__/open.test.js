const open = require("../open");
const child_process = require("child_process");

jest.mock("child_process");

it("opens the notes in editor", async () => {
  await open();
  expect(child_process.spawn).toHaveBeenCalled();
});
