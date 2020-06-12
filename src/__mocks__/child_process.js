const child_process = jest.genMockFromModule("child_process");

const spawn = jest.fn().mockImplementation(() => {
  return { on: () => {} };
});

child_process.spawn = spawn;

module.exports = child_process;
