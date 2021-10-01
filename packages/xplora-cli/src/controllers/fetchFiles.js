const { getDirectoryTreeFromPaths } = require("../utils/files.js");

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
