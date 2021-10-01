const { access } = require("fs/promises");
const { resolve } = require("path");
const fs = require("fs");
const chalk = require("chalk");
const log = require("./log");

/**
 * Gets the list of valid, invalid unaccessible paths
 * @param {string[]} paths - Array of paths to check
 */
async function getPathsValidity(paths) {
  const validPaths = [];
  const invalidPaths = [];
  const noPermissionPaths = [];

  for (const path of paths) {
    const fullPath = resolve(path);
    try {
      await access(fullPath, fs.constants.R_OK);
      validPaths.push(fullPath);
    } catch (error) {
      if (error.code === "EACCES") {
        noPermissionPaths.push(fullPath);
      } else {
        invalidPaths.push(fullPath);
      }
    }
  }

  return { validPaths, invalidPaths, noPermissionPaths };
}

/**
 * Constructs a string containing the list of paths that are invalid, valid
 * Exits the process if there are no valid paths
 */
function handlePathsValidity({ validPaths, invalidPaths, noPermissionPaths }) {
  const validPathMessage = `
  ${chalk.bold.green("VALID PATH(S)")}

    ${validPaths.map((path) => `✅ ${path}`).join("\n    ")}
  `;

  const invalidPathMessage = `
  ${chalk.bold.red("INVALID PATH(S)")}

    ${invalidPaths
      .map((path) => `❌ ${path} - Path does not exist`)
      .join("\n    ")}
    ${noPermissionPaths
      .map((path) => `❌ ${path} - No permission to read this directory`)
      .join("\n    ")}
  `;

  const mesaageOnPathsToOpen = chalk.green(`   👉 Opening valid path(s)`);

  if (invalidPaths.length > 0) {
    log(invalidPathMessage);
  }

  if (validPaths.length > 0) {
    log(validPathMessage);
  }

  // Exit if there are no valid paths
  if (validPaths.length === 0) {
    log(
      chalk.red(
        "   ❌ No valid paths found. Please check your paths and try again"
      )
    );
    process.exit(1);
  }

  log(mesaageOnPathsToOpen);
}

module.exports = { getPathsValidity, handlePathsValidity };
