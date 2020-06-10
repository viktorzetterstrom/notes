const child_process = jest.genMockFromModule("child_process");

const exec = jest.fn().mockImplementation((command) => {
  return command;
});

child_process.exec = exec;

module.exports = child_process;
