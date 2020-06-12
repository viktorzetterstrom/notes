const path = require("path");
const { writeFile } = require("fs").promises;
const question = require("../utils/question");
const config = require("../config/config.json");

const configure = async () => {
  console.log("Configuring notes");
  const editor = await question("Editor command to open notes file");
  config.editor = editor;
  await writeFile(
    path.resolve(__dirname, "..", "config", "config.json"),
    JSON.stringify(config)
  );
};

module.exports = configure;
