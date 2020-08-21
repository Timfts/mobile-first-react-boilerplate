const rimraf = require("rimraf");

module.exports = function cleanDist(cb) {
  rimraf("./dist/*", cb);
  cb();
};
