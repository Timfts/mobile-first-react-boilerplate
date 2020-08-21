const cleanDist = require("./tasks/clean-dist");
const build = require("./tasks/build");
const { series } = require("gulp");

exports.cleanDist = cleanDist;
exports.build = series(cleanDist, build);
