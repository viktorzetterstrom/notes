#!/usr/bin/env node
const write = require("./commands/write");
const open = require("./commands/open");
const help = require("./commands/help");
const configure = require("./commands/configure");

const [command, ...note] = process.argv.slice(2);

const commands = {
  write: () => write(note.join(" ")),
  open: () => open(),
  configure: async () => await configure(),
  help: () => help(),
};

if (commands[command]) {
  (async () => {
    await commands[command]();
    process.exit();
  })();
} else {
  console.log(
    `Command "${command}" does not exists, type help to see existing commands`
  );
  process.exit();
}
