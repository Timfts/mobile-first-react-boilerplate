const webpack = require("webpack");
const webpackProdConfig = require("../webpack/webpack.config.prod");

module.exports = function build(cb) {
  webpack(webpackProdConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      // Handle errors here
    }
    // Done processing
  });
  cb();
};
