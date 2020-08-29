const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: [
    "./main.ts", // the entry point of our app
  ],
  performance: {
    hints: "error", //stop build if bundle is too big
  },
});
