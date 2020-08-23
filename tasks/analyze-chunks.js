const webpack = require("webpack");
const webpackProdConfig = require("../webpack/webpack.config.prod");
const { merge } = require("webpack-merge");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;


/**
 * This task should bundle the project with prod configs and 
 * start bundle analyzer plugin server
 */
module.exports = function analyzeChunks() {
  const analyzerPlugin = new BundleAnalyzerPlugin({
    analyzerMode: "server",
    defaultSizes: "gzip",
    openAnalyzer: "true",
  });

  const configWithPlugin = merge(webpackProdConfig, {
    plugins: [analyzerPlugin],
  });

  return new Promise((resolve, reject) => {
    webpack(configWithPlugin, (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join("\n")));
      }

      resolve();
    });
  });
};
