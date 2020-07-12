const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.common");
const { resolve } = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = merge(commonConfig, {
  mode: "production",
  entry: [
    "./index.tsx", // the entry point of our app
  ],
  performance: {
    hints: "error", //stop build if bundle is too big
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
});
