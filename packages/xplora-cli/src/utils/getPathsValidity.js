const fs = require("fs");
const Path = require("path");

function getPathsValidity(paths) {
  const validPaths = [];
  const invalidPaths = [];

  paths.forEach((path) => {
    const fullPath = Path.resolve(path);
    if (fs.existsSync(Path.resolve(path))) {
      validPaths.push(fullPath);
    } else {
      invalidPaths.push(fullPath);
    }
  });

  return { validPaths, invalidPaths };
}

module.exports = { getPathsValidity };
