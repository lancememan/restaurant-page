// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// Define your project root or a relevant base directory
const projectRoot = __dirname;
const sourceDir = path.resolve(projectRoot, "src");
const outputDir = path.resolve(projectRoot, "dist");

module.exports = {
  mode: "development",
  entry: path.resolve(sourceDir, "index.js"),
  output: {
    filename: "main.js",
    path: outputDir,
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: [path.resolve(sourceDir, "template.html")],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(sourceDir, "template.html"),
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