const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./webpack.config.common");
const boilerplateConfig = require("../boilerplate.config");
const TSLintPlugin = require("tslint-webpack-plugin");

const devServerPort = boilerplateConfig.devServerPort || 8081;

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  entry: [
    `webpack-dev-server/client?http://localhost:${devServerPort}`, // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./main.ts", // the entry point of our app
  ],
  resolve: {
    alias: { "react-dom": "@hot-loader/react-dom" },
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new TSLintPlugin({
      files: ["../src/**/*.ts", "../src/**/*.tsx"],
    }), // linting while development
  ],
});
