#!/usr/bin/env node
const writeNote = require("./commands/write");
const openNotes = require("./commands/open");
const printHelp = require("./commands/--help");

const [command, note] = process.argv.slice(2);

const commands = {
  write: () => writeNote(note),
  open: () => openNotes(),
  "--help": () => printHelp(),
};

if (!commands[command]) {
  return console.log(
    `Command "${command}" does not exists, type --help to see existing commands`
  );
}

commands[command]();
