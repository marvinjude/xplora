const chalk = require("chalk");

function noValidPaths(invalidPaths) {
  const joinedInvalidPaths = `${invalidPaths
    .map((path) => chalk.bold(path.split("/").pop()))
    .join(",")} ${invalidPaths.length > 1 ? "are" : "is"} not valid`;

  return chalk.red(
    `✖ No valid paths found! ${
      invalidPaths.length > 0 && `${joinedInvalidPaths || ""} `
    }`
  );
}

module.exports = { noValidPaths };
