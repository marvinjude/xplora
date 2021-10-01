function getIconURL(extension: string) {
  /**
   * uses icons from https://github.com/PKief/vscode-material-icon-theme/
   * Some of the icon files are not named with the extension so we need to a small dictionary to map them
   */

  const dictionary: any = {
    js: "javascript",
    ts: "typescript",
    md: "markdown",
    yml: "yaml",
    png: "image"
  };

  const icon = `https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@master/icons/${
    dictionary[extension] || extension
  }.svg`;
  return icon;
}

export default getIconURL;
