const path = require("path");
const open = require("open");
const express = require("express");
const log = require("./log");
const chalk = require("chalk");

async function afterListen(app, port) {
  log(`Spinning up a server on ${port}`);
  // Expose the front end if the app is not in development mode
  if (process.env.NODE_ENV !== "development") {
    app.use("/", express.static(path.join(__dirname, "..", "..", "frontend")));

    // Opens URL in user's preffered browser
    try {
      log(chalk.green(`Opening http://localhost:${port}/ in your browser`));
      await open(`http://localhost:${port}/`);
    } catch {
      log(
        chalk.red(
          `Couldn't open browser, Use this URL manually http://localhost:${port}/`
        )
      );
      process.exit(1);
    }
  }
}

module.exports = afterListen;
