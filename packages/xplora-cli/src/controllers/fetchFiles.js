const { getDirectoryTreeFromPaths } = require("../utils/files.js");
const log = require("../utils/log.js");
const chalk = require("chalk");

async function fetchFilesController(_, res, paths) {
  try {
    const trees = await getDirectoryTreeFromPaths(paths);

    res.json({
      success: true,
      data: trees,
    });
  } catch (err) {
    log(chalk.red(err.message));
    res.json({
      success: false,
      data: {},
    });
  }
}

module.exports = { fetchFilesController };
