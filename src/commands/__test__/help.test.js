const help = require("../help");

let log = "";
const storeLog = (input) => (log += input);

it("it logs instructions", () => {
  const standardLog = console.log;
  console.log = jest.fn(storeLog);

  expect(log.length).toBe(0);
  help();
  expect(log.length).toBeGreaterThan(0);

  console.log = standardLog;
});
