#!/usr/bin/env node
const write = require("./commands/write");
const open = require("./commands/open");
const help = require("./commands/--help");

const [command, ...note] = process.argv.slice(2);

const commands = {
  write: () => write(note.join(" ")),
  open: () => open(),
  "--help": () => help(),
};

if (!commands[command]) {
  return console.log(
    `Command "${command}" does not exists, type --help to see existing commands`
  );
}

commands[command]();
