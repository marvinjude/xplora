const { watch } = require("fs");
const { getDirectoryTreeFromPaths } = require("./files.js");

//events 
const CHANGED = "CHANGED";

/**
 * Watch each direcories in the given paths and emit a CHANGED event when change is detected.
 * @param {Array} paths - Array of Paths to watch
 */
function handleFileChanges(paths) {
  for (const path of paths) {
    watch(path, async (eventType, filename) => {
      if (filename) {
        // only recalculate tree for directory where change occured
        const payload = await getDirectoryTreeFromPaths([path]);
        console.log(`Change Detected in ${path}, Emitting ${CHANGED} event`);

        // emit event
        io.sockets.emit(CHANGED, {
          payload,
        });
      }
    });
  }
}

module.exports = { handleFileChanges };
