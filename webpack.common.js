const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: "./client/index.html",
  filename: "index.html",
  inject: "body"
});

module.exports = {
  entry: {
    app: "./client/index.js"
  },
  plugins: [new CleanWebpackPlugin(["dist"]), HTMLWebpackPluginConfig],
  output: {
    filename: "index_bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
      { test: /\.jsx$/, use: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/
      }
    ]
  }
};
