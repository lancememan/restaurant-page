const path = require("path");
// Define your project root or a relevant base directory
const projectRoot = __dirname;
const sourceDir = path.resolve(projectRoot, "src");
const outputDir = path.resolve(projectRoot, "dist");

module.exports = {
  sourceDir: sourceDir,
  outputDir: outputDir,
  projectRoot: projectRoot,
};