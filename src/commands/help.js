var packageJson = require("../../package.json");

const help = () => {
  console.log(`
${packageJson.name} - ${packageJson.version} - ${packageJson.description}
Usage: notes [command] [args]
Commands:
  * help            See list of commands
  * open            Open notes file
  * write [note]    Write note to file
  * configure       Configure notes
`);
};

module.exports = help;
