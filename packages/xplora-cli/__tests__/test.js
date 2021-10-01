const test = require("ava");
const deepEqual = require("deep-equal");
const { getDirectoryTreeFromPaths } = require("../src/utils/files");

test("List files in directory", async (t) => {
  const paths = [`${__dirname}/testing`];
  const expected = {
    testing: {
      files: [
        {
          name: "a.js",
          isDirectory: false,
          path: "/Users/user/Code/xplora/packages/xplora-cli/__tests__/testing/a.js",
        },
        {
          name: "b.js",
          isDirectory: false,
          path: "/Users/user/Code/xplora/packages/xplora-cli/__tests__/testing/b.js",
        },
      ],
      isRoot: true,
    },
  };

  const tree = await getDirectoryTreeFromPaths(paths);
  const isEqual = deepEqual(tree, expected);
  t.is(isEqual, true);
});
