const { readdir } = require("fs").promises;
const path = require("path");
const fs = require("fs");
const log = require("./log");

/**
 * Validate if the path is a directory
 * @param {string} path
 * @returns {boolean}
 * @returns {object}
 */
async function isPathADirectory(path) {
  try {
    const isDir = fs.lstatSync(path).isDirectory();
    return isDir;
  } catch (e) {
    return false;
  }
}

/**
 * Get files and directories from a path
 * @param {*} path
 * @returns {object}
 */
async function readDir(path) {
  const directoryContents = await readdir(path, { withFileTypes: true });

  const data = directoryContents.map((directoryContent) => {
    return {
      name: directoryContent.name,
      isDirectory: directoryContent.isDirectory(),
    };
  });

  return data;
}

/**
 * Get the directory tree from a path
 * @param {string} path a path to a directory
 * @returns {object}
 */
async function listDirectoryFromPath(path) {
  if (!(await isPathADirectory(path))) {
    log(
      "The Path provided is either invalid or not a directory, and cannot be traversed upon"
    );
    return {};
  }

  let visited = {};
  let nameParts = path.split("/");
  const name = nameParts[nameParts.length - 1];

  let root = {
    name: name,
    isDirectory: true,
    path: path,
  };

  let stack = [];
  stack.push(root);

  let fileTree = {};

  while (!stack.length == 0) {
    let current = stack.shift();
    let pathKeys = current.path.split("/");
    let baseFolderInd = pathKeys.indexOf(root.name);

    pathKeys = pathKeys.slice(baseFolderInd);

    let prev = fileTree;
    let curr;

    for (let pathPart of pathKeys) {
      if (prev[pathPart]) curr = prev[pathPart];
      else {
        prev[pathPart] = {};
        curr = prev[pathPart];
      }
      prev = curr;
    }

    curr.files = [];
    visited[current.path] = true;

    let contentsInCurrentDir = [];
    try {
      contentsInCurrentDir = await readDir(current.path + "/");
    } catch (e) {}

    contentsInCurrentDir = contentsInCurrentDir.map((val) => ({
      name: val.name,
      isDirectory: val.isDirectory,
      path: current.path + "/" + val.name,
    }));

    for (item of contentsInCurrentDir) {
      if (!(item.path in visited)) {
        if (item.isDirectory) stack.push(item);
        if (!item.isDirectory) {
          curr.files.push(item);
        }
      }
    }
  }
  return fileTree;
}

/**
 * Get tree for each path in paths
 * @param {*} paths array of paths
 * @returns {object}
 */
async function getDirectoryTreeFromPaths(paths) {
  let trees = {};
  const rootDir = path.resolve(__dirname, "..");

  for (let fullPath of paths) {
    const tree = await listDirectoryFromPath(fullPath, rootDir);
    const [[key, value]] = Object.entries(tree);

    trees[key] = { ...value, isRoot: true };
  }

  return trees;
}

module.exports = { getDirectoryTreeFromPaths };
