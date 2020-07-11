const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: resolve(__dirname, "../src"), // set src as context for  webpack configurations
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
  },
  performance: {
    hints: "warning",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "index.ejs" })],
};
