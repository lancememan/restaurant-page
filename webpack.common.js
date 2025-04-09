// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const utils = require("./webpack.utils");
const path = require("path");

module.exports = {
  entry: path.resolve(utils.sourceDir, "index.js"),
  output: {
    filename: "main.js",
    path: utils.outputDir,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(utils.sourceDir, "template.html"),
    })
  ],
  module: {
    rules: [
        {
            test: /\.css/i,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.html$/i,
            loader: "html-loader",
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: "asset/resource",
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: "asset/resource",
        },          
    ],
  },
};