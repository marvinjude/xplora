const { getDirectoryTreeFromPaths } = require("../utils/files.js");
const log = require("../utils/log.js");
const chalk = require("chalk");
const ora = require("ora");

async function fetchFilesController(_, res, paths) {
  const spinner = ora("Genrating File Tree....").start();

  try {
    const trees = await getDirectoryTreeFromPaths(paths);

    spinner.succeed("Generated File Tree");

    res.json({
      success: true,
      data: trees,
    });
    
  } catch (err) {
    spinner.fail("Failed to generate file tree");

    res.json({
      success: false,
      data: {},
    });
  }
}

module.exports = { fetchFilesController };
