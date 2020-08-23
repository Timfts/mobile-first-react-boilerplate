const webpack = require("webpack");
const webpackProdConfig = require("../webpack/webpack.config.prod");

/** Responsible only for transpile the .ts and .tsx files */
function bundleTask() {
  const compiler = webpack(webpackProdConfig);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join("\n")));
      }
      resolve();
    });
  });
}

module.exports = bundleTask;
