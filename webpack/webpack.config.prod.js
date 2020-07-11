const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const {resolve} = require('path');

module.exports = merge(commonConfig, {
  mode: "production",
  entry: [
    "./index.tsx", // the entry point of our app
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "bundle.[name].js",
    path: resolve(__dirname, '../dist'),
  },
});