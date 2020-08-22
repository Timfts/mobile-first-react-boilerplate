const webpack = require("webpack");
const webpackProdConfig = require("../webpack/webpack.config.prod");

module.exports = function bundle() {
  return new Promise((resolve, reject) => {
    webpack(webpackProdConfig, (err, stats) => {
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
