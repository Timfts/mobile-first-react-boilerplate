const webpack = require("webpack");
const webpackProdConfig = require("../webpack/webpack.config.prod");

module.exports = function bundle(cb) {
  webpack(webpackProdConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      // Handle errors here
    }
    cb();
  });
};
