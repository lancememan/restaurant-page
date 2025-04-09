const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const utils = require("./webpack.utils");
const path = require("path");

module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [path.resolve(utils.sourceDir, "template.html")],
  },
});