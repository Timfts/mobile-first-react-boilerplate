const { merge } = require("webpack-merge");
const webpack = require("webpack");
const commonConfig = require("./webpack.config.common");
const TSLintPlugin = require("tslint-webpack-plugin");

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  entry: [
    "webpack-dev-server/client?http://localhost:8080", // bundle the client for webpack-dev-server and connect to the provided endpoint
    "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
    "./index.tsx", // the entry point of our app
  ],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
    ],
  },
  devServer: {
    hot: true, // enable HMR on the server
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
    new TSLintPlugin({
      files: ["../src/**/*.ts", "../src/**/*.tsx"],
    }), // linting while development
  ],
});
