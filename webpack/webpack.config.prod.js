const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: [
    "./index.tsx", // the entry point of our app
  ],
  performance: {
    hints: "error", //stop build if bundle is too big
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "common",
          enforce: true,
          chunks: "all",
          minChunks: 4,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
