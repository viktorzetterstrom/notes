var pjson = require("../../package.json");

const help = () => {
  console.log(`
${pjson.name} - ${pjson.version} - ${pjson.description}
Usage: notes [command] [args]
Commands:
  * --help: See list of commands
  * open: Open notes file
  * write "note": Write note to file
  `);
};

module.exports = help;
